import styled from 'styled-components'

export const Wraper = styled.div`
    margin-top: -56px;
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
`

export const Logo = styled.div`
    position: absolute;
    top: 56px;
    margin-left: 50px;
    img {
        width: 100px;
    }
`

export const Box = styled.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
`

export const Title = styled.h4`
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    font-size: 18px;
    color: #969696;
    a {
        padding: 10px;
        color: #969696;
        cursor: pointer;
        &.active {
            font-weight: 700;
            color: #ea6f5a;
            border-bottom: 2px solid #ea6f5a;
        }
    }
    b {
        padding: 10px;
        font-weight: 600;
    }
`

export const Container = styled.div`
    form {
        margin-bottom: 30px;
        .inputBox {
            position: relative;
            width: 100%;
            input {
                width: 100%;
                height: 50px;
                margin-bottom: 0;
                padding: 4px 12px 4px 35px;
                border: 1px solid #c8c8c8;
                border-radius: 0 0 4px 4px;
                background-color: hsla(0,0%,71%,.1);
                vertical-align: middle;
            }
            &:first-child {
                input:first-child {
                    border-bottom: none;
                    border-radius: 4px 4px 0 0;
                }
            }
        }
        .rememberBtn {
            float: left;
            margin: 15px 0;
            span {
                margin-left: 5px;
                font-size: 15px;
                color: #969696;
                vertical-align: middle;
            }
        }
        .forgetBtn {
            float: right;
            position: relative;
            margin: 15px 0;
            font-size: 14px;
            a {
                color: #999;
            }
            .dropdownMenu {
                top: 20px;
                left: auto;
                right: 0;
                border-radius: 4px;
                li {
                    line-height: 20px;
                    a {
                        padding: 10px 20px;
                        color: #333;
                    }
                }
            }
        }
        .accountBtn {
            background: #3194d0;
            margin-top: 20px;
            width: 100%;
            padding: 9px 18px;
            font-size: 18px;
            border: none;
            border-radius: 25px;
            color: #fff;
            cursor: pointer;
            outline: none;
            display: block;
            clear: both;
        }
    }

`