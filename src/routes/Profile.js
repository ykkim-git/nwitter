import React from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <span>My Profile</span>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
