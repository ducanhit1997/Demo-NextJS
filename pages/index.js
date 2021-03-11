import { useEffect } from "react";
import { PageLayout } from "../src/components/layout/page-layout";
import { useRouter } from "next/router";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("account/sign-in");
    }, 3000);
  }, []);
  return (
    <div className="bg-white text-center">
      <Spinner color="primary" />
    </div>
  );
};

export default MainPage;
