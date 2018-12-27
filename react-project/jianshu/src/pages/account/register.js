import React, { PureComponent } from 'react'

class Register extends PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            remember: true
        }
        this.handleRememberState =  this.handleRememberState.bind(this)
    }
    render () {
        return (
            <form>
                <div className="input-box">
                    <input placeholder="你的昵称" 
                        className="input-no-border"
                        ref={(input) => {this.account = input}}
                        type="text" 
                        name="user[nickname]" 
                        id="user_nickname" />
                    <i className="iconfont"></i>
                </div>
                <div className="input-box">
                    <input placeholder="密码" 
                        className="input-no-border"
                        ref={(input) => {this.password = input}}
                        type="password" 
                        name="user[mobile_number]" 
                        id="user_mobile_number" />
                        <i className="iconfont"></i>
                </div>
                <div className="input-box">
                    <input placeholder="设置密码" 
                        ref={(input) => {this.password = input}}
                        type="password" 
                        name="user[password]" 
                        id="user_password" />
                        <i className="iconfont"></i>
                </div>
                <button className="account-btn register" 
                    type="button"
                    onClick={() => this.props.login(this.account, this.password)}>
                    注册
                </button>
            </form>
        )
    }
    handleRememberState () {
        this.setState({
            remember: !this.state.remember
        })
    }
}
export default Register