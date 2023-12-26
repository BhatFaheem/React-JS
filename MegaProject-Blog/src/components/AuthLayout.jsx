import React, { useEffect, useState } from "react";
import { useNavigate, useSelector } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authentication !== authStatus) {
      navigate("/login");
    } else if (!authentication && authentication !== authStatus) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);
  return <div>AuthLayout</div>;
}
