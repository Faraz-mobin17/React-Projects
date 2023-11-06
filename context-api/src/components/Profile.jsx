import React, { useContext } from "react";
import UserContext from "../context/UseContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return <div>Welcome {user.username}</div>; // Assuming user is an object with a username property
}

export default Profile;
