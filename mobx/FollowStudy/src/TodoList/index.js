import { trace, toJS, spy, observe, observable, action, computed } from 'mobx'
import React, { Component, Fragment } from 'react'
import ReactDom from 'react-dom'
import { observer, PropTypes as ObservablePropTypes } from 'mobx-react'
import PropTypes from 'prop-types'

// spy(event => {
//     console.log(event)
// })

class Todo {
    id = Math.random()
    @observable title = ''
    @observable finished = false

    constructor (title) {
        this.title = title
    }
    @action.bound toggle () {
        this.finished = !this.finished
    }
}
class Store {
    constructor () {
        observe(this.todos, change => {
            this.disposers.forEach(disposer => disposer())
            this.disposers = []
            for (let todo of change.object) {
                const disposer = observe(todo, changex => {
                    this.save()
                    // console.log(changex)
                })
                this.disposers.push(disposer)
            }
            // console.log(change)
            this.save()
        })
    }
    save () {
        sessionStorage.setItem('todos', JSON.stringify(toJS(this.todos)))
        // console.log(toJS(this.todos))
    }
    disposers = []
    @observable todos = []

    @action.bound createTodo (title) {
        this.todos.unshift(new Todo(title))
    }
    @action.bound removeTodo (todo) {
        this.todos.remove(todo)
    }
    @computed get left () {
        return this.todos.filter(toto => !toto.finished).length
    }
}

var store = new Store()

@observer
class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            finished: PropTypes.bool.isRequired
        }).isRequired
    }
    handleClick = e => {
        this.props.todo.toggle()
    }
    render () {
        trace()
        const todo = this.props.todo
        return (
            <Fragment>
                <input 
                    type="checkbox" 
                    className="toggle"
                    onChange={this.handleClick}
                    checked={todo.finished}/>
                <span className={ ['title', todo.finished && 'finished'].join(' ') }>
                    {todo.title}
                </span>
            </Fragment>
        )
    }
}

@observer
class TodoHeader extends Component {
    static propTypes = {}
    state = {
        inputValue: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        var store = this.props.store
        var inputValue = this.state.inputValue
        store.createTodo(inputValue)
        this.setState({
            inputValue: ''
        })
    }
    handleChange = (e) => {
        var inputValue = e.target.value
        this.setState({
            inputValue
        })
    }
    render () {
        const store = this.props.store
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        className="input"
                        placeholder="what needs to be finished"
                        value={this.state.inputValue}
                        onChange={this.handleChange} />
                </form>
            </header>
        )
    }
}

@observer
class TodoFooter extends Component {
    static propTypes = {}
    render () {
        const store = this.props.store
        return (
            <footer>
                    {store.left} items unfinished
            </footer>
        )
    }
}

@observer
class TodoView extends Component {
    static propTypes = {}
    render () {
        const todos = this.props.todos
        return (
            todos.map(todo => {
                return (
                    <li key={todo.id} className="todo-item">
                        <TodoItem todo={todo} />
                        <span className="delete"
                            onClick={ () => store.removeTodo(todo) }>
                            X
                        </span>
                    </li>
                )
            }) 
        )
    }
}

@observer
class TodoList extends Component {
    static propTypes = {
        store: PropTypes.shape({
            createTodo: PropTypes.func,
            todos: ObservablePropTypes.observableArrayOf(ObservablePropTypes.observableObject).isRequired
        }).isRequired
    }
    handleSubmit = (e) => {
        e.preventDefault()
        var store = this.props.store
        var inputValue = this.state.inputValue
        store.createTodo(inputValue)
        this.setState({
            inputValue: ''
        })
    }
    handleChange = (e) => {
        var inputValue = e.target.value
        this.setState({
            inputValue
        })
    }

    render () {
        trace()
        const store = this.props.store
        const todos = store.todos
        return (
            <div className="todo-list">
                <TodoHeader store={store} />
                <ul>
                    <TodoView todos={todos} />
                </ul>
                <TodoFooter store={store} />
            </div>
        )
    }
}

ReactDom.render(<TodoList store={store} />, document.querySelector('#root'))