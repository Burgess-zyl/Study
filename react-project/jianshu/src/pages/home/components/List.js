import React, { PureComponent } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class List extends PureComponent {
    render () {
        const { list } = this.props
        const showList = list.toJS()
        return (
            showList.map((item) => {
                return (
                    <ListItem key={item.id}>
                        <ListInfo>
                            {this.getImg(item.imgUrl)}
                            <h3 className="title">
                                <Link to="/detail">{item.title}</Link>
                            </h3>
                            <p className="desc">{item.content}</p>
                            <div className="meta">
                                <a href="###">
                                    咦哈
                                </a>
                                <a href="###">
                                    <i className="iconfont">&#xe61b;</i>
                                </a>
                                <span>
                                    <i className="iconfont">&#xe61a;</i>
                                </span>
                            </div>
                        </ListInfo>
                    </ListItem>
                )
            })
        )
    }
    getImg (imgUrl) {
        if (imgUrl) {
            return (
                <img 
                    alt=""
                    className="pic" 
                    src={imgUrl}
                />
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'list'])
})

export default connect(mapStateToProps, null)(List)