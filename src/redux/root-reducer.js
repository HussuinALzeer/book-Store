import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import cartReducer from './cart/cart.reducer'
import adminReducer from './admin-nav-bar/admin.reducer'
import booksReducer from './Data/data.reducer'
import ThebookReducer from './getbook/book.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer']
  };
const rootReducer = combineReducers({
    cartReducer:cartReducer,
    admin:adminReducer,
    booksReducer:booksReducer,
    ThebookReducer:ThebookReducer

})

export default persistReducer(persistConfig, rootReducer);
