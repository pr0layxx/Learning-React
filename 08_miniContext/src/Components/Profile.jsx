import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <h2>Please LogIn First</h2>;
  return <div>Username is {user.username}. </div>;
}

export default Profile;
