import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
    Wrapper,
    Inner,
    InnerItem,
    Indicatiors,
    Control
} from './style'
class Carousel extends PureComponent {
    constructor (prop) {
        super(prop)
        this.state = {
            current: 0
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.carouselSwitchLeft = this.debounce(() => {
            this.carouselSwitch(0)
        }, 200)
        this.carouselSwitchRight = this.debounce(() => {
            this.carouselSwitch(1)
        }, 300)
    }
    render () {
        const { list } = this.props
        const showList = list.toJS()
        return (
            <Wrapper onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}>
                <Inner className="carousel-inner">
                    {
                        showList.map((item) => {
                            return (
                                <InnerItem key={item.id}>
                                    <img src={item.url} alt={item.alt} />
                                </InnerItem>
                            )
                        })
                    }
                </Inner>
                <Indicatiors className="carousel-indicators">
                    {
                        showList.map((item, index) => {
                            return (
                                <li onClick={() => {
                                    this.setState({
                                        current: index
                                    })
                                }} key={item.id}></li>
                            )
                        })
                    }
                </Indicatiors>
                <Control onClick={this.carouselSwitchLeft} className="left showControl"><i></i></Control>
                <Control onClick={this.carouselSwitchRight} className="right showControl"><i></i></Control>
            </Wrapper>
        )
    }
    componentWillUnmount () {
        clearInterval(this.autoPlayTimer)
    }
    componentWillUpdate (nextProps, nextState) {
        if (nextState.current !== this.state.current) {
            this.carouselInnerActive(this.state.current, nextState.current)
        }
    }
    componentDidUpdate (prevProps) {
        if (prevProps.list !== this.props.list) {
            this.setCarouselState(0)
            this.autoPlay()
        }
    }
    getDom () {
        return {
            inner: document.getElementsByClassName('carousel-inner')[0].children,
            indicators: document.getElementsByClassName('carousel-indicators')[0].children
        }
    }
    setCarouselState (index) {
        let { inner, indicators } = this.getDom()
        inner[index].classList.add('active')
        indicators[index].classList.add('active')
    }
    autoPlay () {
        let timer = null
        timer = setInterval (() => {
            this.carouselSwitch(1)
        }, 3000)
        this.autoPlayTimer = timer
    }
    handleMouseEnter () {
        clearTimeout(this.debounceTimer)
        clearInterval(this.autoPlayTimer)
    }
    handleMouseLeave () {
        this.autoPlay()
    }
    carouselInnerActive (prev, current) {
        let { inner, indicators } = this.getDom()
        inner[prev].classList.add('left')
        inner[current].classList.add('next')
        setTimeout(() => {
            inner[current].classList.add('left')
            indicators[prev].classList.remove('active')
            indicators[current].classList.add('active')
        })
        setTimeout(() => {
            inner[prev].classList.remove('active', 'left')
            inner[current].classList.remove('next', 'left')
            inner[current].classList.add('active')
        }, 600)
    }
    // direction 0 left 1 right
    carouselSwitch (direction) {
        let { inner } = this.getDom()
        let min = 0,
            max = inner.length - 1
        let mapDirection = [min, max]
        this.setState((preState) => {
            let { current } = preState
            return {
                current: current === mapDirection[direction] 
                    ? mapDirection[1^direction] 
                    : current + (direction ? 1 : -1)
            }
        })
    }
    debounce (fn, delay = 1000, ...args) {
        let timeout;
        return () => {
            if (timeout) { 
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                fn(...args)
            }, delay);
            this.debounceTimer = timeout
        }
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'carouselList'])
})

export default connect(mapStateToProps, null)(Carousel)

