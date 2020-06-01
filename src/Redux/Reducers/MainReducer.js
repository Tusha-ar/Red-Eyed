import { combineReducers } from "redux";
import collectionReducer from "./collectionReducer";
import SearchReducer from './SearchReducer'

const MainReducer = combineReducers({
    collectionReducer,
    SearchReducer
})

export default MainReducer