import { combineReducers } from "redux";
import { albumsReducer } from "./albumsReducer";
import { singersReducer } from "./singersReducer";
import { songReducer } from "./songReducer";
import { userReducer } from "./userReducer";
export const reducer = combineReducers({
  userReducer,
  songReducer,
  albumsReducer,
  singersReducer,
});
