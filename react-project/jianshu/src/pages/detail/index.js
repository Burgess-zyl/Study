import React, { PureComponent } from 'react'
import {
    DetailWrapper,
    Post,
    Article
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends PureComponent {
    render () {
        const { base, article} = this.props
        return (
            <DetailWrapper>
                <Post>
                    <Article>
                        <h1 className="title">{article.title}</h1>
                        <div className="author">
                            <a className="avator" href="###">
                                <img  
                                    alt="avator"
                                    src="//upload.jianshu.io/users/upload_avatars/13341050/f506781c-1119-4b9e-a0b7-d1b3392098f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96">
                                </img>
                            </a>
                            <div className="info">
                                <span className="name">
                                    <a href="###">{base.author}</a>
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
                                {article.content}
                            </p>
                        </div>
                    </Article>
                </Post>
            </DetailWrapper>
        )
    }

    componentDidMount () {
        this.props.getArticleDetails()
    }

    getMeta () {
        const arr = [
            '',
            '字数',
            '阅读',
            '评论',
            '喜欢',
            '赞赏'
        ]
        const meta = this.props.base.meta
        if (meta) {
            return (
                arr.map((item, index) => {
                    return (
                        <span key={item}>{`${item} ${meta[index]}`}</span>
                    )
                })
            )
        }
    }
}

const mapStateToProps = (state) => ({
    base: state.getIn(['detail', 'base']),
    article: state.getIn(['detail', 'article'])
})

const mapDispatchToProps = (dispatch) => ({
    getArticleDetails () {
        dispatch(actionCreators.getArticleDetails())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)