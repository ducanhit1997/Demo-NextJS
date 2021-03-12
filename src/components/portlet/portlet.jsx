import { Spin } from "antd";
import React, { useState } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

const Portlet = (props) => {
  const { cardTitle, children, loading } = props;

  return (
    <Spin spinning={loading}>
      <Card>
        <CardTitle
          tag="h6"
          className="mb-0 d-flex justify-content-between align-items-baseline"
        >
          {cardTitle}
        </CardTitle>
        <CardBody>{children}</CardBody>
      </Card>
    </Spin>
  );
};

export default Portlet;

Portlet.defaultProps = {
  loading: false,
};
