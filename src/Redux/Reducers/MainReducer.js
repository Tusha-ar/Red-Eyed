import { combineReducers } from "redux";
import collectionReducer from "./collectionReducer";
import SearchReducer from './SearchReducer'
import CartReducer from './CartReducer'

const MainReducer = combineReducers({
    collectionReducer,
    SearchReducer,
    CartReducer
})

export default MainReducer