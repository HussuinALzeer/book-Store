import {combineReducers} from 'redux'

import cartReducer from './cart/cart.reducer'

import adminReducer from './admin-nav-bar/admin.reducer'

export default combineReducers ({
    cartReducer:cartReducer,
    admin:adminReducer
})