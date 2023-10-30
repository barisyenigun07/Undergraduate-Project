import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'rootIYTEMLAK',
    storage,
}

const reducer = combineReducers({
    auth: authSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: [thunk]
});
export const persistor = persistStore(store);
export default store;