import React, { Fragment } from 'react'
import { Input, List, Button } from 'antd'

const TodoListUI = (props) => {
    return (
        <Fragment>
            <Input
                style={{ width: "400px", margin: "5px" }}
                placeholder="输入待做事项"
                value={props.inputValue}
                onChange={props.handleChange}
            >
            </Input>
            <Button
                onClick={props.handleBtnClick}
            >
                提交
            </Button>
            <List
                style={{ width: "470px", margin: "auto" }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item actions={[<a onClick={() => {props.handleDelItem(index)}}>del</a>]}>
                        {item}
                    </List.Item>
                )}
            />
        </Fragment>
    )
}

export default TodoListUI