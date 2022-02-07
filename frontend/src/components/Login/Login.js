import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPIKey } from "../../store/user";
import Maps from "./Maps";

const Login = () => {
  const dispatch = useDispatch();
  const apiKey = useSelector((state) => state.user?.key);

  useEffect(() => {
    if (!apiKey) {
      dispatch(getAPIKey());
    }
  }, [dispatch, apiKey]);

  if (!apiKey) {
    return null;
  }

  return (
    <div>
      <Maps apiKey={apiKey} />
    </div>
  );
};

export default Login;
