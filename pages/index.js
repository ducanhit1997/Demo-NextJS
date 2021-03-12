import { useRouter } from "next/router";
import { Spinner } from "reactstrap";
import React, { useEffect } from "react";

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
