import React, { PureComponent } from 'react'
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
            debounce: '',
            current: 0,
            autoPlayTimer: ''
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }
    render () {
        return (
            <Wrapper onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}>
                <Inner className="carousel-inner">
                    <InnerItem>
                        <img src="//upload.jianshu.io/admin_banners/web_images/4588/c9d175a9865206d371742d53c41ed4a042c5d00b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    </InnerItem>
                    <InnerItem>
                        <img src="//upload.jianshu.io/admin_banners/web_images/4591/30f6c3d080ff9d9610d745bd777b1c0ebba3e183.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    </InnerItem>
                    <InnerItem>
                    <img src="//upload.jianshu.io/admin_banners/web_images/4592/5a8ccc4a47850adb0b1829e3deed5f75b52cb401.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    </InnerItem>
                </Inner>
                <Indicatiors className="carousel-indicators">
                    <li></li>
                    <li></li>
                    <li></li>
                </Indicatiors>
                <Control className="left showControl"><i></i></Control>
                <Control className="right showControl"><i></i></Control>
            </Wrapper>
        )
    }
    componentDidMount () {
        this.setCarouselState(0)
        this.setState({
            current: 1  
        }, () => {
            this.autoPlay(this.state.current)
        })
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
    autoPlay (current) {
        let { inner, indicators } = this.getDom()
        let timer = null
        timer = setInterval (() => {
            let prev = current - 1
            if (current === inner.length) {
                prev = current - 1
                current = 0
            }
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
                current++
                this.setState({
                    current: current
                })
            }, 600)
        }, 3000)
        this.setState({
            autoPlayTimer: timer
        })
    }
    handleMouseEnter () {
        clearTimeout(this.state.debounce)
        clearInterval(this.state.autoPlayTimer)
        this.setState({
            autoPlayTimer: null
        })
    }
    handleMouseLeave () {
        this.debounce(this.autoPlay(this.state.current))
    }
    debounce (fn, delay = 1000) {
        let timeout;
        return () => {
            const context = this;
            if (timeout) { 
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                fn.apply(context)
            }, delay);
            this.setState({
                debounce: timeout
            })
        }

    }
    changeCurrent () {}
}

export default Carousel

