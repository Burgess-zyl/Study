import styled from 'styled-components'
import logo from '../../static/logo.png'

export const HeaderWraper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logo});
    background-size: contain;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`
export const NavItem = styled.div`
    line-height: 26px;
    padding: 15px;
    margin-right: 10px;
    font-size: 17px;
    color: #333;
    cursor: pointer;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 50%;
        text-align: center;
        &.focused {
            background: #969696;
        }
    }
`

export const NavSearch = styled.input`
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    width: 240px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    color: #666;
    transition: width 0.5s 
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 320px;
    }
`

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    margin: 8px 15px 0 15px;
    padding: 0 20px;
    font-size: 14px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    cursor: pointer;
    &.registr {
        color： #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`