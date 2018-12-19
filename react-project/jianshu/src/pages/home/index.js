import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Slide from './components/Slide'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
class Home extends Component {
    render () {
        return (
            <HomeWrapper className="clearfix">
                <HomeLeft>
                    <Slide></Slide>
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