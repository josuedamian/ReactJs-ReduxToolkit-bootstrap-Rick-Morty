import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/dataReducers";
export const store = configureStore({
  reducer: {
    Data: dataReducer,
  },
});
