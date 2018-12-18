import React, { PureComponent } from 'react'
import {
    DetailWrapper,
    Post,
    Article
} from './style'
class Detail extends PureComponent {
    render () {
        return (
            <DetailWrapper>
                <Post>
                    <Article>
                        <h1 className="title">这几个网站值得你去浪费时光！</h1>
                        <div className="author">
                            <a className="avator" href="###">
                                <img  
                                    alt="avator"
                                    src="//upload.jianshu.io/users/upload_avatars/13341050/f506781c-1119-4b9e-a0b7-d1b3392098f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96">
                                </img>
                            </a>
                            <div className="info">
                                <span className="name">
                                    <a href="###">个发发</a>
                                </span>
                                <a  href="###"
                                    className="btn btn-success follow ">
                                    <i className="iconfont">&#xe61d;</i>
                                    <span>关注</span>
                                </a>
                                <div className="meta">
                                    {this.getMeta()}
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <p>
                            从前，我给大家推荐了很多自学网站，里面有很多免费优质课程，漏掉的小伙伴点这里→学习网站1，学习网站2. 这些学习网站真的是用了都说好
                            </p>
                        </div>
                    </Article>
                </Post>
            </DetailWrapper>
        )
    }

    getMeta () {
        const arr = [
            '1',
            '字数',
            '阅读',
            '评论',
            '喜欢',
            '赞赏'
        ]
        return (
            arr.map(item => {
                return (
                    <span key={item}>{item}</span>
                )
            })
        )
    }
}



export default Detail