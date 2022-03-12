import { useCallback, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import styled from "styled-components";
import todoSlice from "../TodoLists/todoSlice";
import { useDispatch } from "react-redux";
import { Tag, Space, Button } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import ModalShow from "../Modal/Modal";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, completed, id, priority }) {
  const [activeModal, setActiveModal] = useState(false);

  const dispatch = useDispatch();

  const handleModalCancel = useCallback(() => {
    setActiveModal(false);
  }, []);
  function handleChangeCheckbox(e) {
    dispatch(todoSlice.actions.setCompletedStatus(id));
  }
  const handleEditClick = useCallback(() => {
    setActiveModal(true);
  }, []);

  const handleRemoveClick = useCallback(() => {
    console.log(id);
    dispatch(todoSlice.actions.deleletTodo(id));
  });

  return (
    <div id={id}>
      <FormGroup
        sx={{
          backgroundColor: "#fff",
          padding: "10px 20px",
          marginBottom: "10px",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <InputLabel checked={completed}>
          <FormControlLabel
            control={
              <Checkbox
                checked={completed}
                onChange={handleChangeCheckbox}
                sx={{
                  color: "pink",
                  marginRight: "20px",

                  "&.Mui-checked": {
                    color: "#ff6f6f",
                  },
                }}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
              />
            }
            label={name}
          />
          <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
          <Space
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              marginRight: "20px",
              cursor: "pointer",
            }}
          >
            <Button
              onClick={handleEditClick}
              style={{ color: "green" }}
              shape="circle"
              icon={<EditFilled id={id} />}
              size="medium"
            />
            <Button
              onClick={handleRemoveClick}
              style={{ color: "red" }}
              shape="circle"
              icon={<DeleteFilled />}
              size="medium"
            />
          </Space>
        </InputLabel>
      </FormGroup>
      {activeModal && (
        <ModalShow
          name={name}
          priorityCurrent={priority}
          activeModal={activeModal}
          handleModalCancel={handleModalCancel}
          setActiveModal={setActiveModal}
          id={id}
        />
      )}
    </div>
  );
}

const InputLabel = styled.div`
  text-decoration: ${(props) => (props.checked ? "line-through" : "")};
`;
