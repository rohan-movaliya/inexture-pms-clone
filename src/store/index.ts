import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";
import { apiService } from "../services/api.services";

const authPersistConfig = {
  key: "pms-auth",
  storage,
  whitelist: [
    "isAuthenticated",
    "access_token",
    "refresh_token",
    "token_type",
    "expires_in",
    "refresh_expires_in",
    "user",
  ],
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer,
);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiService.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
