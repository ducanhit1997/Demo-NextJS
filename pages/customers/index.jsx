import { useEffect, useState } from "react";
import { PageLayout } from "../../src/components/layout/page-layout";
import { useRouter } from "next/router";
import Portlet from "../../src/components/portlet/portlet";
import { Button } from "antd";
import { Tag, Space, Table, Spin } from "antd";
import { EditOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import Axios from "axios";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Completed",
    dataIndex: "completed",
    key: "completed",
    render: (completed) => (
      <Tag color={completed ? "green" : "red"}>{completed ? "Yes" : "No"}</Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Link
        href={{
          pathname: "/customers/[id]",
          query: { id: record.id  },
        }}
      >
        <Button icon={<EditOutlined />}>Edit</Button>
      </Link>
    ),
  },
];
const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      Axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          setData(res.data);
        })
        .finally(() => setLoading(false));
    }, 1500);
  }, []);

  return (
    <PageLayout>
      <Portlet>
        <h6 className="text-center">Customer management</h6>
        <Link href="customers/add">
          <Button type="primary" icon={<PlusOutlined />}>
            Add
          </Button>
        </Link>
        <Spin spinning={loading}>
          <Table columns={columns} dataSource={data} className="pt-2" />
        </Spin>
      </Portlet>
    </PageLayout>
  );
};

export default MainPage;
