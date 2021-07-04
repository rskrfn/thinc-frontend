import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loginReducers } from "./Reducers/Login";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginReducers"],
};
const rootReducer = combineReducers({ loginReducers });

export default persistReducer(persistConfig, rootReducer);
