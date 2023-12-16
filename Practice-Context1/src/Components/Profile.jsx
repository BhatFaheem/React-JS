/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import userContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(userContext);
  if (!user) return <div>Please Login! </div>;
  return <div>Welcome {user.username}</div>;
}

export default Profile;
