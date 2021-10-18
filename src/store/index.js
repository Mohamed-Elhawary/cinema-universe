import { createStore } from "redux";
import rootMiddleware from "middleware";
import rootReducer from "reducers";

const store = createStore(rootReducer, rootMiddleware);

export default store;