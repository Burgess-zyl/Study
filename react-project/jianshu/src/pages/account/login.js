import React, { PureComponent } from 'react'

class Login extends PureComponent {
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
                    <input placeholder="手机号或邮箱"
                        className="input-no-border"
                        ref={(input) => {this.account = input}}
                        type="text" 
                        name="session[email_or_mobile_number]" 
                        id="session_email_or_mobile_number" />
                    <i className="iconfont"></i>
                </div>
                <div className="input-box">
                <input placeholder="密码" 
                    ref={(input) => {this.password = input}}
                    type="password" 
                    name="session[password]" 
                    id="session_password" />
                    <i className="iconfont"></i>
                </div>
                <button className="account-btn login" 
                    type="button"
                    onClick={() => this.props.login(this.account, this.password)}>
                    登录
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

export default Login