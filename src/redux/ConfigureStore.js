//This is the configuration for connect the redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import ShortenUrl from "./ShortenUrl";
//This is the configuration for localStorage with redux persist
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

//configuration for init values for redux persist to save value in localStorage
const persistConfig = {
  key: "ShortenUrl",
  storage,
};

//Here to register the redux reducers to redux persist
const persistedReducer = persistReducer(persistConfig, ShortenUrl);

const ConfigureStore = configureStore({
  reducer: persistedReducer,
});
export default ConfigureStore;
export const persistor = persistStore(ConfigureStore);
