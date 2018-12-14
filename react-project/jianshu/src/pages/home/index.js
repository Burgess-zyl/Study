import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Slide from './components/Slide'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
class Home extends Component {
    render () {
        return (
            <HomeWrapper>
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
}

export default Home