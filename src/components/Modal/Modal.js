import { Col, Input, Modal, Row, Select, Tag } from "antd";
import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import todoSlice from "../TodoLists/todoSlice";

function ModalShow({
  handleModalCancel,
  setActiveModal,
  activeModal,
  name,
  priorityCurrent,
  id,
}) {
  const input = useRef();
  const [textInput, setTextInput] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [newName, setNewName] = useState(name);
  const [newPriority, setNewPriority] = useState(priorityCurrent);

  const dispatch = useDispatch();
  const handleChoosePriority = useCallback((e) => {
    setPriority(e);
  });
  const handleInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  const handleModalAdd = useCallback(() => {
    dispatch(
      todoSlice.actions.addTodo({
        id: uuidv4(),
        name: textInput,
        completed: false,
        priority: priority,
      })
    );
    setTextInput("");
    setActiveModal(false);
  });

  const handleEditInputChange = useCallback((e) => {
    setNewName(e.target.value);
  });

  const handleChooseNewPriority = useCallback((e) => {
    setNewPriority(e);
  });

  const handleEditButton = useCallback(() => {
    dispatch(
      todoSlice.actions.updateTodo({
        id,
        newName,
        newPriority,
      })
    );
    setActiveModal(false);
  });

  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70%",
      }}
      title="Add Todo"
      visible={activeModal}
      onOk={id ? handleEditButton : handleModalAdd}
      onCancel={handleModalCancel}
      okText={id ? "Edit" : "Add"}
    >
      <Row style={{ height: "50px" }}>
        <Col span={24}>
          <Input.Group style={{ display: "flex" }} compact>
            <Input
              ref={input}
              value={id ? newName : textInput}
              onChange={id ? handleEditInputChange : handleInputChange}
            />
            <Select
              defaultValue={id ? priorityCurrent : priority}
              onChange={id ? handleChooseNewPriority : handleChoosePriority}
            >
              <Select.Option value="High" label="High">
                <Tag color="red">High</Tag>
              </Select.Option>
              <Select.Option value="Medium" label="Medium">
                <Tag color="blue">Medium</Tag>
              </Select.Option>
              <Select.Option value="Low" label="Low">
                <Tag color="gray">Low</Tag>
              </Select.Option>
            </Select>
          </Input.Group>
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalShow;
