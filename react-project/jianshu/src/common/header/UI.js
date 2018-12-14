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
    const { focused,
        mouseState,
        handleFocus, 
        handleBlur, 
        hotSearch,
        handleMouseEnter,
        handleMouseLeave,
        handleSwitch,
        page,
        totalPage } = props
    const list = hotSearch.toJS()
    const listShow = []
    if (list.length) {
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            if (i < list.length) {
                listShow.push(list[i])
            }
        }
    }
    const rotationAngle = 360 * page
    const spinSty = {
        transform: `rotate(${rotationAngle}deg)`
    }
    const showSearchInfo = () => {
        if (focused || mouseState) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch
                                onClick={() => handleSwitch(page, totalPage)}
                            >
                                <i style={spinSty} className="iconfont spin">&#xe851;</i>
                                换一批
                            </SearchInfoSwitch>
                        </SearchInfoTitle>
                        <div>
                            {
                                listShow.map((item) => {
                                    return (
                                        <SearchInfoTag key={item}>
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
                    onFocus={() => handleFocus(hotSearch)}
                    onBlur={handleBlur}
                >
                </NavSearch>
                <i className={`iconfont search ${ focused ? 'focused' : '' }`}>&#xe62b;</i>
                {showSearchInfo()}
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


export default HeaderUI