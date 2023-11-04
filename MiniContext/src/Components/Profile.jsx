/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  return !user ? <div>Please Login</div> : <div>Welcone {user.username}</div>;
}

export default Profile;
