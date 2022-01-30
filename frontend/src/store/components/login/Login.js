import React, { useEffect, useState } from "react";
import { getOneUser } from "../../user";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [person, getPerson] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getOneUser(1));
  }, []);

  return (
    <div>
      <div>{user?.username}</div>
    </div>
  );
};

export default Login
