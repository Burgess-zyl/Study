import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
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
            handleMouseEnter, 
            handleMouseLeave,
            handleSwitch } = this.props
        return (
            <HeaderUI 
                focused={focused}
                page={page}
                totalPage={totalPage}
                mouseState={mouseState}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                hotSearch={hotSearch}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleSwitch={handleSwitch}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        mouseState: state.getIn(['header', 'mouseState']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        hotSearch: state.getIn(['header', 'hotSearch']),
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
