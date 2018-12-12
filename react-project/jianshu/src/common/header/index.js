import React, { Component } from 'react';
import { HeaderWraper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWrapper } from './style'
class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            focused: false
        }
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    render() {
        return (
            <div className="App">
            <HeaderWraper>
                <Logo href="/" />
                <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">关注</NavItem>
                <NavItem className="left">消息</NavItem>
                <SearchWrapper>
                    <NavSearch placeholder="搜索"
                        className={this.state.focused ? 'focused' : ''}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    >
                    </NavSearch>
                    <i className={`iconfont ${ this.state.focused ? 'focused' : '' }`}>&#xe62b;</i>
                </SearchWrapper>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right"></NavItem>
                </Nav>
                <Addition>
                    <Button className="writing">
                        <i className="iconfont">&#xe616;</i>
                        写文章
                    </Button>
                    <Button className="register">注册</Button>
                </Addition>
            </HeaderWraper>
            </div>
        );
    }

    handleFocus () {
        this.setState({
            focused: true
        })
    }
    handleBlur () {
        this.setState({
            focused: false
        })
    }
}

export default Header;
