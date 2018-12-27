import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &:hover .showControl {
        opacity: 1;
    }
`

export const Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const InnerItem = styled.div`
    float: left;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
`

export const Indicatiors = styled.ol`
    position: absolute;
    left: 40%;
    bottom: 0;
    margin-top: 0;
    margin-left: -30%;
    margin-bottom: 8px;
    padding-left: 0;
    width: 80%;
    z-index: 15;
    list-style: none;
    text-align: center;
    .active {
        width: 25px;
        height: 2px;
        background-color: #fff;
    }
    li {
        box-sizing: border-box;
        display: inline-block;
        margin: 1px;
        margin-left: 7px;
        line-height: 20px;
        text-indent: -999px;
        width: 25px;
        height: 2px;
        background-color: hsla(0,0%,47%,.4);
        border-radius: 10px;
        cursor: pointer;
    }
`

export const Control = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
    font-size: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,.6);
    background-color: rgba(0,0,0,.4);
    height: 50px;
    width: 40px;
    top: 40%;
    &.left {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
    &.right {
        left: auto;
        right: 0;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }
`