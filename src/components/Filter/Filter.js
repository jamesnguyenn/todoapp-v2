import { Col, Radio, Row, Select } from "antd";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import filterSlice from "./filterSlice";
import tagRender from "./tagRender";
const options = [{ value: "High" }, { value: "Medium" }, { value: "Low" }];
function Filter() {
  const [status, setStatus] = useState("All");
  const dispatch = useDispatch();
  const handleStatusFilterChange = useCallback(
    (e) => {
      setStatus(e.target.value);
      dispatch(filterSlice.actions.searchStatus(e.target.value));
    },
    [dispatch]
  );

  const handlePriorityFilterChange = useCallback(
    (e) => {
      dispatch(filterSlice.actions.searchPriority(e));
    },
    [dispatch]
  );

  return (
    <>
      <Row justify="left">
        <Col sm={24} style={{ marginBottom: "20px" }}>
          <Radio.Group defaultValue="All" onChange={handleStatusFilterChange}>
            <Radio value="All">All</Radio>
            <Radio value="Completed">Completed</Radio>
            <Radio value="Todo">To do</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="left">
        <Col span={24}>
          <Select
            mode="multiple"
            showArrow
            tagRender={tagRender}
            defaultValue={[]}
            style={{ width: "100%" }}
            options={options}
            onChange={handlePriorityFilterChange}
          />
        </Col>
      </Row>
    </>
  );
}

export default Filter;
