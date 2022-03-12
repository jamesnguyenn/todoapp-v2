import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filter/filterSlice";
import todoSlice from "../components/TodoLists/todoSlice";

export const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoLists: todoSlice.reducer,
  },
});
