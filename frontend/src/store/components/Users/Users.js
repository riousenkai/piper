import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../user";

const Users = () => {
  const [person, getPerson] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getOneUser(1));
  }, []);

  return (
    <div>
      <div>{user?.username}</div>
      <div>{user?.id}</div>
    </div>
  );
};

export default Users;
