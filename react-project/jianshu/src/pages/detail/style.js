import styled from 'styled-components'

export const DetailWrapper = styled.div`
    position: relative;
    padding-top: 10px;
`

export const Post = styled.div`
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 40px;
    width: 620px;
`

export const Article = styled.div`
    .btn {
        display: inline-block;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857;
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .btn-success {
        border-radius: 40px;
        color: #fff;
        background-color: #42c02e;
        border-color: #42c02e;
    }
    .title {
        word-break: break-word!important;
        margin: 20px 0 0;
        font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
        font-size: 34px;
        font-weight: 700;
        line-height: 1.3;
    }
    .author {
        margin: 30px 0 40px;
        .avator {
            width: 48px;
            height: 48px;
            vertical-align: middle;
            display: inline-block;
            img {
                width: 100%;
                height: 100%;
                border: 1px solid #ddd;
                border-radius: 50%;
            }
        }
        .info {
            vertical-align: middle;
            display: inline-block;
            margin-left: 8px
            .name {
                margin-right: 3px;
                font-size: 16px;
                vertical-align: middle;
            }
            .follow {
                padding: 0 7px 0 5px;
                font-size: 12px;
                font-weight: 400;
                line-height: normal;
                border-color: #42c02e;
                span {
                    margin-left: 2px;
                    display: inline;
                }
            }
            .meta {
                margin-top: 5px;
                font-size: 12px;
                color: #969696;
                span {
                    padding-right: 5px;
                }
            }
        }
    }
    .content {
        color: #2f2f2f;
        word-break: break-word!important;
        word-break: break-all;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.7;
    }
`