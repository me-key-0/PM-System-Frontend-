import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import AuthReducer from "./auth/Reducer";
import projectReducer from "./project/Reducer";
import ChatReducer from "./chat/Reducer";
import CommentReducer from "./comment/Reducer";
import IssueReducer from "./issue/Reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  project: projectReducer,
  chat: ChatReducer,
  comment: CommentReducer,
  issue: IssueReducer,
});
const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default Store;
