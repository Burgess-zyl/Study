import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer }  from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as accountReducer } from '../pages/account/store';


const reducer = combineReducers({
    account: accountReducer,
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
})

export default reducer