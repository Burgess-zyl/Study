import React, { PureComponent } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
class List extends PureComponent {
    render () {
        const { list } = this.props
        const showList = list.toJS()
        return (
            showList.map((item) => {
                return (
                    <ListItem key={item.id}>
                        <ListInfo>
                            <h3 className="title">{item.title}</h3>
                            <p className="desc">{item.content}</p>
                        </ListInfo>
                    </ListItem>
                )
            })
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'list'])
})

export default connect(mapStateToProps, null)(List)