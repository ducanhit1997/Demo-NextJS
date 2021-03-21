/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button, Switch, Radio } from "antd";
import { PageContext } from "../../src/components/layout/page-layout";

const CustomerForm = (props) => {
  const { dataView, type } = props;
  const { setDataUpdate, setDataAddNew } = useContext(PageContext);
  const onFinish = (values) => {
    type === 'add' ? setDataAddNew(values) : setDataUpdate(values);
  };
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
  };

  const [active, setActive] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    if (dataView) {
      form.setFieldsValue(dataView);
      setActive(dataView.active);
    }
  }, [dataView]);

  const optionsSex = [
    {
      value: "Male",
      label: "Male",
    },
    { value: "Female", label: "Female" },
  ];

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      {...layout}
      form={form}
    >
      <Form.Item
        label="First Name"
        name="first_name"
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="last_name"
        rules={[{ required: true, message: "Please input your last name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Value is not a valid email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="IP Address" name="ip_address">
        <Input disabled={type !== 'add'} />
      </Form.Item>

      <Form.Item label="Gender" name="gender">
        <Radio.Group options={optionsSex}></Radio.Group>
      </Form.Item>

      <Form.Item label="Active" name="active">
        <Switch checked={active} onChange={() => setActive(!active)} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomerForm;

CustomerForm.defaultProps = {
  loading: false,
};
