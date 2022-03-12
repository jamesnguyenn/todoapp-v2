import { createSelector } from "@reduxjs/toolkit";
export const todoLists = (state) => state.todoLists;
export const searchText = (state) => state.filters.search;
export const searchStatus = (state) => state.filters.status;
export const searchPriority = (state) => state.filters.priority;

export const todoListsFilter = createSelector(
  todoLists,
  searchText,
  searchStatus,
  searchPriority,
  (todoLists, searchText, status, priority) => {
    return todoLists.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
              priority.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchText.toLowerCase());
      }
      return (
        (status === "Completed" ? todo.completed : !todo.completed) &&
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
