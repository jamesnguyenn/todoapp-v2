import React, { useState, useCallback, useRef } from "react";
import { Container, Icon, IconButton, Typography } from "@mui/material";
import Nav from "./components/Nav/Nav";
import TodoLists from "./components/TodoLists/TodoLists";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Filter from "./components/Filter/Filter";
import ModalShow from "./components/Modal/Modal";

function App() {
  const [activeModal, setActiveModal] = useState(false);

  const handleModalCancel = useCallback(() => {
    setActiveModal(false);
  }, []);
  const handleClickAddButton = useCallback(() => {
    setActiveModal(true);
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "transparent",
        fontFamily: "Poppins",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="xs"
        overflow="hidden"
        sx={{
          position: "relative",
          padding: "0 20px",
          backgroundColor: "#FAFAFF",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Nav />
        <Typography
          variant="h2"
          noWrap
          component="div"
          sx={{ fontSize: "30px", fontWeight: "bold", marginBottom: "30px" }}
        >
          What's up , James!
        </Typography>
        <Filter />
        <TodoLists />
      </Container>
      <IconButton
        sx={{ position: "fixed", bottom: 0, right: 0, margin: "30px" }}
        onClick={handleClickAddButton}
      >
        <AddCircleIcon
          sx={{
            color: "#f44336",
            backgroundColor: "#fff",
            borderRadius: "100%",
            fontSize: "50px",
          }}
        ></AddCircleIcon>
      </IconButton>

      <ModalShow
        activeModal={activeModal}
        handleModalCancel={handleModalCancel}
        setActiveModal={setActiveModal}
      />
    </div>
  );
}

export default App;
