import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducers from "./reducers/userReducers";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const middleware = [thunk];

const reducer = combineReducers({
  user: userReducers,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, compose(applyMiddleware(...middleware)));

export const persistor = persistStore(store);

export default store;
