/* eslint-disable react/prop-types */
import { Spin } from "antd";
import React, { useState } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

const Modal = ({ children, openModal, ...props }) => {
    console.log(openModal)
  return (
    <Modal
      title="Basic Modal"
      visible={openModal}
    //   onOk={handleOk}
    //   onCancel={handleCancel}
      {...props}
    >
      {children}
    </Modal>
  );
};

export default Modal;

Modal.defaultProps = {
  openModal: false,
};
