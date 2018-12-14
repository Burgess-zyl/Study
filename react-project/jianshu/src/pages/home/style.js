import styled from 'styled-components'

export const HomeWrapper = styled.div`
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
    width: 960px;
`

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
`
export const HomeRight = styled.div`
    float: right;
    padding-top: 30px;
    box-sizing: border-box;
    width: 280px;
`
export const SlideWrapper = styled.div`
    margin-bottom: 35px;
    height: 270px;
    border-bottom: 1px solid #dcdcdc;
`
export const ListItem = styled.div`
    padding: 5px 0 20px;
    border-bottom: 1px solid #dcdcdc;
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
    width: 500px;
    .title {
        margin: -7px 0 4px;
        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
        color: #969696;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`