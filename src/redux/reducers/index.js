import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer';
import FavReducer from './FavReducer';
import CartReducer from './CartReducer';

export default combineReducers({
    authReducer: AuthReducer,
    favReducer: FavReducer,
    cartReducer: CartReducer
})