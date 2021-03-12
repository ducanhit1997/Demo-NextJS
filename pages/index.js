import { useEffect } from "react";
import { PageLayout } from "../src/components/layout/page-layout";
import { useRouter } from "next/router";
import { Spinner, Button } from "reactstrap";

const MainPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("customers");
    }, 2000);
  }, []);
  return (
    <div className="bg-white text-center">
      <Spinner color="primary" />
    </div>
  );
};

export default MainPage;
