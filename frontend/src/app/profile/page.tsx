"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import scss from "./profile.module.scss";
import useFetchUserData from "../hooks/useFetchUserData";

const Profile = () => {
  const router = useRouter(); // Initialize the useRouter hook
  const [userName, setUserName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [user, setUser] = useState();
  const userDataCookie = Cookies.get("userData");
  const parsedUserData = JSON.parse(userDataCookie || "{}");
  const getUser: any = useFetchUserData(parsedUserData.authToken);
  const [stateEmail, setStateEmail] = useState<string>()

  // useEffect(() => {
  //   // Read the user data cookie and parse the JSON data
  //   const userDataCookie = Cookies.get("userData");
  //   const parsedUserData = JSON.parse(userDataCookie || "{}");
  //   const getUser = useFetchUserData(parsedUserData.jwt || '');
  //   console.log(getUser);
  // }, []);

  const handleLogout = () => {
    // Remove the userData cookie to log the user out
    Cookies.remove("userData");
    // Redirect to the login page after logout
    router.push("/login"); // Replace '/login' with your actual login page route
    location.reload();
  };
  const handleEdit = () => {
    
  };
  return (
    <div className={scss.profile}>
      {getUser ? (
        <>
          <Typography variant={"h6"} component={"h1"}>
            Welcome to your profile page,{" "}
            <span style={{ color: "red" }}>{getUser?.username}</span>!
          </Typography>
          <Typography variant={"h6"} component={"h1"}>
            Email: <span style={{ color: "red" }}>{getUser?.email}</span>!
          </Typography>
          <div className={scss.control}>
            <Button variant="contained" onClick={handleLogout} color={"error"}>
              Log Out
            </Button>
          </div>
        </>
      ) : (
        <Typography>You need to sign in.</Typography>
      )}
    </div>
  );
};

export default Profile;
