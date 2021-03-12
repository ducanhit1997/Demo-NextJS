import { useEffect, useState } from "react";
import { PageLayout } from "../../src/components/layout/page-layout";
import { useRouter } from "next/router";
import Portlet from "../../src/components/portlet/portlet";
import { Button } from "antd";
import { Tag, Space, Table, Spin } from "antd";

const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <PageLayout className="pt-2">
      <Portlet>
        <h6 className="text-center">Add management</h6>
      </Portlet>
    </PageLayout>
  );
};

export default MainPage;
