import { useState } from "react";
import { UserContext } from "./UserContext";
import Login from "../components/Login";
import Profile from "../components/Profile";

export const UserContextProvider=()=>{
    const [user, setUser]=useState(null);
    return(
    <UserContext.Provider value={{user,setUser}}>
        <Login/>
        <Profile/>
    </UserContext.Provider>

    )
}