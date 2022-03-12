import { Stack, Typography } from "@mui/material";
import React from "react";
import Todo from "../Todo/Todo";
import { todoLists, todoListsFilter } from "../../redux/selectors";
import { useSelector } from "react-redux";
import styled from "styled-components";

function TodoLists() {
  const todosLists = useSelector(todoListsFilter);

  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{ color: "#C2C0D2", fontSize: "15px", margin: "20px 0" }}
      >
        TODAY'S TASK
      </Typography>

      <Container style={{ height: "400px" }}>
        {todosLists.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              completed={todo.completed}
              priority={todo.priority}
            ></Todo>
          );
        })}
      </Container>
    </>
  );
}

export default TodoLists;

const Container = styled.div`
  border-radius: 20px;
  max-height: 450px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
