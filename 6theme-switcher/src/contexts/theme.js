import { createContext, useContext } from "react";

export const themeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const useTheme=()=>{
    return useContext(themeContext);
}