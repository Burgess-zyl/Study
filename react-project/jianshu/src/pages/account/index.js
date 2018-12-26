import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Route, NavLink, Link, Redirect } from 'react-router-dom'
import {
    Wraper,
    Logo,
    Box,
    Title,
    Container
} from './style'
import * as actionCreators from './store/actionCreators'
import Login from './login'
import Register from './register'

class Account extends PureComponent {
    render () {
        const { match, loginState } = this.props
        if (loginState) {
            return <Redirect to="/" />
        } else {
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
                            <NavLink to={`${match.url}/login`}>登录</NavLink>
                            <b>·</b>
                            <NavLink to={`${match.url}/register`}>注册</NavLink>
                        </Title>
                        <Container>
                            <Route exact path={`${match.url}/login`} 
                                component={() => <Login
                                    login={this.props.login}/>} />
                            <Route exact path={`${match.url}/register`} component={Register} />
                        </Container>
                    </Box>
                </Wraper>
            )
        }
    }
    componentWillMount () {
        this.props.changeAccountState(true)
    }
    componentWillUnmount () {
        this.props.changeAccountState(false)
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