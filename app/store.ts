import { configureStore } from '@reduxjs/toolkit';
import { roomsApi } from "./features/rooms/api"; 

export const store = configureStore({
  reducer: {
    [roomsApi.reducerPath]: roomsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(roomsApi.middleware),
});