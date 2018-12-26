import styled from 'styled-components'

export const HomeWrapper = styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    width: 960px;
`

export const HomeLeft = styled.div`
    float: left;
    padding: 30px 0 0 15px;
    width: 640px;
    box-sizing: border-box;
`
export const HomeRight = styled.div`
    margin-left: 4.16667%;
    float: right;
    padding-top: 30px;
    box-sizing: border-box;
    width: 280px;
`
export const CarouselWrapper = styled.div`
    margin-bottom: 35px;
    height: 270px;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdcdc;
`
export const ListItem = styled.div`
    padding: 15px 2px 20px 0;
    margin: 0 0 15px;
    min-height: 140px;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    .pic {
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    float: left;
    width: 100%;
    .title {
        margin: -7px 0 4px;
        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
        cursor: pointer;
        & a {
            &:link {
                color: #000;
            }
            &:visited {
                color: #969696;
            }
        }
        &:hover {
            text-decoration: underline;
        }
    }
    .desc {
        margin-bottom: 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    .meta {
        padding-right: 0!important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #b4b4b4;
        .iconfont {
            font-size: 14px;
        }
        a {
            color: #b4b4b4;
            margin-right: 10px;
        }
    }
`

export const RecommendWrapper = styled.div`
    width: 280px;
`

export const RecommendItem = styled.div`
    margin-top: -5px;
    margin-bottom: 11px;
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`

export const WriteWrapper = styled.ul`
    width: 278px;
    text-align: left;
    border-radius: 3px;
    span {
        font-size: 14px;
        color: #969696;
    }
`

export const WriterItem = styled.li`
    margin-top: 15px;
    line-height: 20px;
    .avatar {
        float: left;
        display: inline-block;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        cursor: pointer;
        img {
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        border-color: #42c02e;
        i {
            font-size: 12px;
        }
    }
    .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    p {
        display: block;
        margin: 2px 0 10px 0;
        font-size: 12px;
        color: #969696;
    }
`