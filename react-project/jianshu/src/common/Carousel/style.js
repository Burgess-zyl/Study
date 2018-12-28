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
    position: relative;
    width: 100%;
    height: 100%;
    &.carousel-inner {
        .next {
            left: 100%;
        }
        .active {
            display: block;
            left: 0;
        }
    }
`

export const InnerItem = styled.div`
    position: relative;
    height: 100%;
    display: none;
    backface-visibility: hidden;
    perspective: 1000px;
    transition: transform .6s ease-in-out,-webkit-transform .6s ease-in-out;
    &.next {
        position: absolute;
        top: 0;
        display: block;
        width: 100%;
        &.left {
\           transition: left .6s ease-in-out;
            left: 0%;
        }
    }
    &.active {
        // transform: translateZ(0);
        // left: 0;
        // display: block;
        &.left {
            transform: translate3d(-100%, 0, 0);
            left: 0;
        }
    }
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