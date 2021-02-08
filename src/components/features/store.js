import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layout/layoutSlice";
import ratedDescriptionReducer from "./ratedDescription/ratedDescriptionSlice";

export default configureStore({
  reducer: {
    layout: layoutReducer,
    ratedDescription: ratedDescriptionReducer,
  },
});
