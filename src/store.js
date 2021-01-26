import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./components/features/layoutSlice";

export default configureStore({
  reducer: {
    layout: layoutReducer,
  },
});
