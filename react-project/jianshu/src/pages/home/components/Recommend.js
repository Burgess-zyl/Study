import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {    
    RecommendWrapper,
    RecommendItem
} from '../style'
class Recommend extends PureComponent {
    render () {
        const { list } = this.props
        const showList = list.toJS()
        return (
            <RecommendWrapper>
                {
                    showList.map(item => {
                        return (
                            <RecommendItem
                                key={item.title}
                                imgUrl={item.url}
                            >
                            </RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})


export default connect(mapStateToProps, null)(Recommend)