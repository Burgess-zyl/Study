import React, { PureComponent } from 'react'
import {
    Wrapper,
    Inner,
    InnerItem,
    Indicatiors,
    Control
} from './style'
class Carousel extends PureComponent {
    render () {
        return (
            <Wrapper>
                <Inner>
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
    componentDidMount () {
        setInterval (() => {

        }, 1000)
    }
}

export default Carousel

