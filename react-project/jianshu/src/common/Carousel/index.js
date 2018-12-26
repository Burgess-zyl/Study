import React, { PureComponent } from 'react'
import {
    Wrapper,
    Inner,
    Indicatiors,
    Control
} from './style'
class Carousel extends PureComponent {
    render () {
        return (
            <Wrapper>
                <Inner></Inner>
                <Indicatiors>
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </Indicatiors>
                <Control className="left showControl"></Control>
                <Control className="right showControl"></Control>
            </Wrapper>
        )
    }
}

export default Carousel

