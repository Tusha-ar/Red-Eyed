import { combineReducers } from "redux";
import collectionReducer from "./collectionReducer";


const MainReducer = combineReducers({
    collectionReducer,
})

export default MainReducer