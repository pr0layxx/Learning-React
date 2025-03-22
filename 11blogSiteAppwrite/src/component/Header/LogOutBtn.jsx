import React from "react";
import authService from "../../appwrite/Auth";
import { logout } from "../../store/authSlice";

function LogOutBtn() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService.logOut().then(() => {
      dispatch(logout());
    });
  };
  return <button onClick={handleLogout}>Log out </button>;
}

export default LogOutBtn;
