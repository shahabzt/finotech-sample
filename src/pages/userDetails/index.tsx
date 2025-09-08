import React from "react";
import { useLocation } from "react-router-dom";

const UsersDetails = () => {
  const location = useLocation();
  const user = location.state.user;

  return <div>userdetails</div>;
};

export default UsersDetails;
