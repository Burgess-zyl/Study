import React from 'react'
import { HeaderWraper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoTag
} from './style'

const HeaderUI = (props) => {
    const { focused, handleFocus, handleBlur, hotSearch } = props
    return (
        <HeaderWraper>
            <Logo href="/" />
            <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">关注</NavItem>
            <NavItem className="left">消息</NavItem>
            <SearchWrapper>
                <NavSearch placeholder="搜索"
                    className={focused ? 'focused' : ''}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                </NavSearch>
                <i className={`iconfont search ${ focused ? 'focused' : '' }`}>&#xe62b;</i>
                {showSearchInfo(hotSearch, focused)}
            </SearchWrapper>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right"></NavItem>
            </Nav>
            <Addition>
                <Button className="writing">
                    <i className="iconfont">&#xe616;</i>
                    写文章
                </Button>
                <Button className="register">注册</Button>
            </Addition>
        </HeaderWraper>
    );
}

const showSearchInfo = (hotSearch, show) => {
    if (show) {
        return (
            <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            <i className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {
                            hotSearch.map((item, index) => {
                                return (
                                    <SearchInfoTag key={index}>
                                        {item}
                                    </SearchInfoTag>
                                )
                            })
                        }
                    </div>
                </SearchInfo>
        )
    } else {
        return null
    }
}

export default HeaderUI