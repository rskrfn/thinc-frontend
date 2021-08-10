import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loginReducers } from "./Reducers/Login";
import { pageReducers } from "./Reducers/Page";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginReducers", "pageReducers"],
};
const rootReducer = combineReducers({ loginReducers, pageReducers });

export default persistReducer(persistConfig, rootReducer);
