import Axios from "axios";
import { useRouter } from "next/router";
import { PageLayout } from "../../src/components/layout/page-layout";
import React, { useEffect, useState } from "react";
import Portlet from "../../src/components/portlet/portlet";
const MainPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (id) {
      setLoading(true);
      setTimeout(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then((res) => {
            setData(res.data);
          })
          .finally(() => setLoading(false));
      }, 1500);
    }
  }, []);
  console.log(data)
  return (
    <PageLayout>
      <Portlet loading={loading}>Page edit customers</Portlet>
    </PageLayout>
  );
};
export default MainPage;
