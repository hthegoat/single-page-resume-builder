import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    column1: {
      id: "column1",
      width: 67,
      list: ["Introduction", "Experience", "Projects", "Certificates"],
    },
    column2: {
      id: "column2",
      width: 33,
      list: ["Summary", "Objective", "Skills", "Expertise", "Methodology", "Tools", "Education"],
    },
  },
  reducers: {
    updateLayoutOnDifferentColumn: (state, { payload }) => {
      const source = payload.source;
      const destination = payload.destination;
      state[destination.droppableId].list.splice(destination.index, 0, state[source.droppableId].list[source.index]);
      state[source.droppableId].list.splice(source.index, 1);
    },
    updateLayoutOnSameColumn: (state, { payload }) => {
      const source = payload.source;
      const destination = payload.destination;
      const item = state[source.droppableId].list.splice(source.index, 1);
      state[destination.droppableId].list.splice(destination.index, 0, ...item);
    },
    updateWidth: (state, { payload }) => {
      state.column1.width = +payload[0].toFixed(2);
      state.column2.width = +payload[1].toFixed(2);
    },
  },
});

export default layoutSlice.reducer;
export const { updateLayoutOnDifferentColumn, updateLayoutOnSameColumn, updateWidth } = layoutSlice.actions;
export const selectLayout = (state) => state.layout;
