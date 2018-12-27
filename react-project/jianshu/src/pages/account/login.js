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
                <div className="btn-group">
                    <div className="remember-btn">
                        <input 
                            type="checkbox"
                            ref="remember"
                            checked={this.state.remember}
                            onChange={this.handleRememberState}
                            name="session[remember_me]" 
                            id="session_remember_me" />
                        <span>记住我</span>
                    </div>
                    {/* <div className="forget-btn">
                        <a className="" data-toggle="dropdown" href="###">登录遇到问题?</a>
                        <ul className="dropdown-menu">
                            <li><a href="/users/password/mobile_reset">用手机号重置密码</a></li>
                            <li><a href="/users/password/email_reset">用邮箱重置密码</a></li>
                            <li><a target="_blank" href="/p/9058d0b8711d">无法用海外手机号登录</a></li>
                            <li><a target="_blank" href="/p/498a9fa7da08">无法用 Google 帐号登录</a></li>
                        </ul>
                    </div> */}
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