import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import HeaderUI from './UI'

class Header extends Component {
    render () {
        const { focused, hotSearch, handleFocus, handleBlur } = this.props
        return (
            <HeaderUI 
                focused={focused}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                hotSearch={hotSearch}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        hotSearch: state.getIn(['header', 'hotSearch']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus () {
            dispatch(actionCreators.getHotSearchList())
            dispatch(actionCreators.searchFocus())
        },
        handleBlur () {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
