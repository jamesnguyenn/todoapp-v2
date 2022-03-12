import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todo",
  initialState: [
    {
      id: 1,
      name: "Learn English",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      name: "Learn Database",
      priority: "Medium",
      completed: false,
    },
    {
      id: 3,
      name: "Learn Redux",
      completed: true,
      priority: "Low",
    },
  ],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    setCompletedStatus(state, action) {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
    updateTodo(state, action) {
      const currentTodo = state.find((todo) => todo.id === action.payload.id);
      currentTodo.name = action.payload.newName;
      currentTodo.priority = action.payload.newPriority;
    },
    deleletTodo(state, action) {
      const currentIndex = state.findIndex(
        (todo) => todo.id === action.payload
      );
      state.splice(currentIndex, 1);
    },
  },
});
