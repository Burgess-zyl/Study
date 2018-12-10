import React, { Fragment, Component } from 'react'
import { Input, List, Button } from 'antd'
import store from '../redux/index'
import { getInputChangeAction, getAddTodoItemAction, getDelTodoItemAction } from '../redux/actionCreator'
class TodoList extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        this.handleChange = this.handleChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDelItem = this.handleDelItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <Fragment>
                <Input
                    style={{ width: "400px", margin: "5px" }}
                    placeholder="输入待做事项"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                >
                </Input>
                <Button
                    onClick={this.handleBtnClick}
                >
                    提交
                </Button>
                <List
                    style={{ width: "470px", margin: "auto" }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item actions={[<a onClick={() => {this.handleDelItem(index)}}>del</a>]}>
                            {item}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
    handleStoreChange () {
        this.setState(store.getState())
    }
    handleChange (e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleBtnClick () {
        const action = getAddTodoItemAction()
        store.dispatch(action)
    }
    handleDelItem (index) {
        const action = getDelTodoItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList