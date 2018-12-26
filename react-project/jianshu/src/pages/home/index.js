import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { HomeWrapper, HomeLeft, HomeRight, CarouselWrapper } from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Carousel from '../../common/Carousel'
class Home extends Component {
    render () {
        return (
            <HomeWrapper className="clearfix">
                <HomeLeft>
                    <CarouselWrapper>
                        <Carousel />
                    </CarouselWrapper>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend>
                    </Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount () {
        this.props.getArticleList()
        this.props.getRecommendList()
        this.props.getWriterList()
    }
}

const mapDispatchToProps = (dispatch) => ({
    getArticleList () {
        dispatch(actionCreators.getArticleList())
    },
    getRecommendList () {
        dispatch(actionCreators.getRecommendList())
    },
    getWriterList () {
        dispatch(actionCreators.getWriterList())
    }
})

export default connect(null, mapDispatchToProps)(Home)