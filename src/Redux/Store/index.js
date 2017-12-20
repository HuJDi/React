import { createStore,combineReducers} from "redux";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";

import {reducer1,reducer2,reducer3} from "../Reducer";

const store = createStore(combineReducers({
	homelist:reducer1,
	cartlist:reducer2,
	proptitle:reducer3
}),applyMiddleware(thunk));

export default store;