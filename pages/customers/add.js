/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { PageLayout } from "../../src/components/layout/page-layout";
import Portlet from "../../src/components/portlet/portlet";
import CustomerForm from "./customerForm";

const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [dataAddNew, setDataAddNew] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <PageLayout context={{ setDataAddNew }} className="pt-2">
      <Portlet>
        <h6 className="text-center">Customer management</h6>
        <CustomerForm type="add" />
      </Portlet>
    </PageLayout>
  );
};

export default MainPage;
