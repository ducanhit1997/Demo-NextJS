/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react";
import { PageLayout } from "../../src/components/layout/page-layout";
import Portlet from "../../src/components/portlet/portlet";
import { Button, Drawer, Popconfirm } from "antd";
import { Tag, Table } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import Link from "next/link";
import { dataJson } from "../../src/data/dataJson";
import CustomerForm from "./customerForm";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);
  const [dataUpdate, setDataUpdate] = useState();
  const [dataView, setDataView] = useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData(dataJson);
      setLoading(false);
    }, 1000);
  }, []);

  const handleEditCustomer = (id) => {
    setVisible(true);
    setDataView(data.find((x) => x.id === id));
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "IP Address",
      dataIndex: "ip_address",
      key: "ip_address",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (active) => (
        <Tag color={active ? "green" : "red"}>{active ? "Yes" : "No"}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          {/* <Link
            href={{
              pathname: "/customers/[id]",
              query: { id: record.id },
            }}
          > */}
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEditCustomer(record.id)}
          >
            Edit
          </Button>
          {/* </Link> */}
          <Popconfirm
            title={
              <>
                Are you sure to delete customer{" "}
                <strong className="text-primary">
                  {record.first_name} {record.last_name}
                </strong>
                ?
              </>
            }
            onConfirm={() => handleDeleteCustomer(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} className="ml-2" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];
  const handleDeleteCustomer = (id) => {
    setLoading(true);
    // set time out de co hieu ung loading :)))
    setTimeout(() => {
      setData([...data].filter((x) => x.id !== id));
      setLoading(false);
    }, 600);
  };
  useEffect(() => {
    setVisible(false);
    setLoading(true);
    setTimeout(() => {
      if (dataUpdate) {
        const objIndex = data.findIndex((x) => x.id === dataView.id);
        if (objIndex !== -1) {
          data[objIndex].first_name = dataUpdate.first_name;
          data[objIndex].last_name = dataUpdate.last_name;
          data[objIndex].gender = dataUpdate.gender;
          data[objIndex].active = dataUpdate.active;
          setLoading(false);
        }
      }
    }, 700)
  }, [dataUpdate]);

  return (
    <PageLayout context={{ setDataUpdate }}>
      <Portlet>
        <h6 className="text-center">Customer management</h6>
        <Link href="customers/add">
          <Button type="primary" icon={<PlusOutlined />}>
            Add
          </Button>
        </Link>
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          className="pt-2"
          loading={loading}
        />
        <Drawer
          width={450}
          title={
            <div className="text-center">
              <EditOutlined /> <span className="ml-2">Edit customer</span>
            </div>
          }
          placement="right"
          closable={false}
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <CustomerForm dataView={dataView} type="edit" />
        </Drawer>
      </Portlet>
    </PageLayout>
  );
};

export default MainPage;
