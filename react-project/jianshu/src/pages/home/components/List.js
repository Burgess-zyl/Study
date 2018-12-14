import React, { PureComponent } from 'react'
import { ListItem, ListInfo } from '../style'
class List extends PureComponent {
    render () {
        return (
            <ListItem>
                <ListInfo>
                    <h3 className="title">婚礼前夜｜微小说</h3>
                    <p className="desc">那年，他，28岁。她，18岁。 他强暴了她。 他哭着跪在她的父母面前，说他恩将仇报，不配为人，他说他愿意自断手指以示惩戒。手起刀落瞬间，她的父亲...</p>
                </ListInfo>
            </ListItem>
        )
    }
}

export default List