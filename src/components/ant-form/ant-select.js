/* eslint-disable react/prop-types */
import React from "react";
import { Select } from "antd";
const { Option } = Select;
const AntdSelect = (props) => {
  const { options } = props;
  return (
    <Select
      placeholder="Select a option and change input text above"
    >
      {options.map((x) => {
        return (
          <Option key={x.value} value={x.value}>
            {x.label}
          </Option>
        );
      })}
    </Select>
  );
};

export default AntdSelect;

AntdSelect.defaultProps = {
  loading: false,
};
