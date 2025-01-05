//reducers for crud operations on the duck entity

import { combineReducers } from "redux";
import { ducksReducer } from "./ducks";

export const rootReducer = combineReducers({
  ducks: ducksReducer,
});
