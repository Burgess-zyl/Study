import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators  as accountActionCreators} from '../../pages/account/store'
import HeaderUI from './UI'

class Header extends Component {
    render () {
        const { focused,
            page,
            totalPage,
            hotSearch, 
            handleFocus, 
            handleBlur,
            mouseState,
            toTopState,
            handleMouseEnter, 
            handleMouseLeave,
            accountState,
            loginState,
            handleSwitch } = this.props
        return (
            !accountState && <HeaderUI 
                focused={focused}
                page={page}
                totalPage={totalPage}
                mouseState={mouseState}
                loginState={loginState}
                toTopState={toTopState}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                hotSearch={hotSearch}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleSwitch={handleSwitch}
            />
        )
    }
    componentWillMount () {
        console.log('::::')
        // this.props.changeAccountState(false)
    }
    componentDidMount () {
        this.bindScroll()
    }
    bindScroll () {
        window.addEventListener('scroll', this.props.changeToTopState)
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        mouseState: state.getIn(['header', 'mouseState']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        hotSearch: state.getIn(['header', 'hotSearch']),
        toTopState: state.getIn(['header', 'toTopState']),
        accountState: state.getIn(['account', 'accountState']),
        loginState: state.getIn((['account', 'loginState']))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus (hotSearch) {
            if (!hotSearch.size) {
                dispatch(actionCreators.getHotSearchList())
            }
            dispatch(actionCreators.searchFocus())
        },
        handleBlur () {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter () {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave () {
            dispatch(actionCreators.mouseLeave())
        },
        handleSwitch (page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.switchSearchInfo(page + 1))
            } else {
                dispatch(actionCreators.switchSearchInfo(1))
            }
        },
        changeToTopState () {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > 200) {
                dispatch(actionCreators.toTopState(true))
            } else {
                dispatch(actionCreators.toTopState(false))
            }
        },
        changeAccountState (state) {
            console.log('()()())')
            dispatch(accountActionCreators.changeAccountState(state))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
