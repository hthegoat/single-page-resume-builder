import { createSlice } from "@reduxjs/toolkit";

export const rateDescriptionSlice = createSlice({
  name: "ratedDescription",
  initialState: {
    title: "Technical Skills",
    description: [
      { name: "GoLang", rating: 4 },
      { name: "Deno", rating: 3 },
      { name: "React", rating: 3 },
      { name: "JavaScript", rating: 4 },
      { name: "CSS", rating: 3 },
      { name: "HTML5", rating: 4 },
    ],
  },
  reducers: {
    updateTitle: (state, { payload }) => {
      state.title = payload;
    },
    addDescriptionItem: (state) => {
      state.description.push({ name: "", rating: 1 });
    },
    updateDescriptionItemName: (state, { payload }) => {
      state.description[+payload.index].name = payload.value;
    },
    updateDescriptionItemRating: (state, { payload }) => {
      state.description[+payload.index].rating = +payload.rating;
    },
    deleteDescriptionItem: (state, { payload }) => {
      state.description.splice(+payload, 1);
    },
  },
});

export default rateDescriptionSlice.reducer;
export const {
  updateTitle,
  addDescriptionItem,
  updateDescriptionItemName,
  updateDescriptionItemRating,
  deleteDescriptionItem,
} = rateDescriptionSlice.actions;
export const selectRatedDescription = (state) => state.ratedDescription;
