import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import {
    Wraper,
    Logo,
    Box,
    Title,
    Container
} from './style'
import * as actionCreators from './store/actionCreators'

class Account extends PureComponent {
    render () {
        const { loginState } = this.props
        if (!loginState) {
            return (
                <Wraper>
                    <Logo>
                        <Link to="/">
                            <img 
                                alt="简书" 
                                src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"/>
                        </Link>
                    </Logo>
                    <Box>
                        <Title>
                            <a className="active">登录</a>
                            <b>·</b>
                            <a>注册</a>
                        </Title>
                        <Container>
                            <form>
                                <div className="inputBox">
                                    <input placeholder="手机号或邮箱" 
                                        ref={(input) => {this.account = input}}
                                        type="text" 
                                        name="session[email_or_mobile_number]" 
                                        id="session_email_or_mobile_number" />
                                    <i className="iconfont"></i>
                                </div>
                                <div className="inputBox">
                                <input placeholder="密码" 
                                    ref={(input) => {this.password = input}}
                                    type="password" 
                                    name="session[password]" 
                                    id="session_password" />
                                    <i className="iconfont"></i>
                                </div>
                                <div className="btnGroup">
                                    <div className="rememberBtn">
                                        <input 
                                            type="checkbox" 
                                            value="true" 
                                            checked="checked" 
                                            name="session[remember_me]" 
                                            id="session_remember_me" />
                                        <span>记住我</span>
                                    </div>
                                    {/* <div className="forgetBtn">
                                        <a className="" data-toggle="dropdown" href="###">登录遇到问题?</a>
                                        <ul className="dropdownMenu">
                                            <li><a href="/users/password/mobile_reset">用手机号重置密码</a></li>
                                            <li><a href="/users/password/email_reset">用邮箱重置密码</a></li>
                                            <li><a target="_blank" href="/p/9058d0b8711d">无法用海外手机号登录</a></li>
                                            <li><a target="_blank" href="/p/498a9fa7da08">无法用 Google 帐号登录</a></li>
                                        </ul>
                                    </div> */}
                                </div>
                                <button className="accountBtn" 
                                    type="button"
                                    onClick={() => this.props.login(this.account, this.password)}>
                                    登录
                                </button>
                            </form>
                        </Container>
                    </Box>
                </Wraper>
            )
        } else {
            return <Redirect to="/"/>
        }
    }
    componentWillMount () {
        this.props.changeAccountState(!this.props.accountState)
    }
    componentWillUnmount () {
        this.props.changeAccountState(!this.props.accountState)
    }
}

const mapStateToProps = (state) => ({
    accountState: state.getIn(['account', 'accountState']),
    loginState: state.getIn(['account', 'loginState'])
})

const mapDispatchToProps = (dispatch) => ({
    changeAccountState (state) {
        dispatch(actionCreators.changeAccountState(state))
    },
    login (account, password) {
        dispatch(actionCreators.login(account.value, password.value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Account)