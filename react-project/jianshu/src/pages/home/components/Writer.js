import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriteWrapper, WriterItem } from '../style'
class Writer extends PureComponent {
    render () {
        const { list } = this.props
        const showList = list.toJS()
        return (
            <WriteWrapper>
                <span>推荐作者</span>
                {
                    showList.map(item => {
                        return (
                            <WriterItem key={item.id}>
                                <a className="avatar" href="###">
                                    <img alt="头像" src={item.avatar_source} />
                                </a>
                                <a href="###" className="follow">
                                    <i className="iconfont">&#xe61d;</i>
                                    关注
                                </a>
                                <a href="###" className="name">{item.nickname}</a>
                                <p>写了{this.dealNumber(item.total_wordage)}字 · {this.dealNumber(item.total_likes_count)}喜欢</p>
                            </WriterItem>
                        )
                    })
                }
            </WriteWrapper>
        )
    }
    dealNumber (num) {
        if (num >= 1000) {
            return Math.floor(num / 1000 * 10) / 10 + 'k'
        } else {
            return num
        }
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'writerList'])
})

export default connect(mapStateToProps, null)(Writer)