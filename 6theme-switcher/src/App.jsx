import React, { useEffect, useState } from "react";
import ThemeBtn from "./components/Themebtn";
import Card from "./components/Card";
import { themeContext } from "./contexts/theme";
function App() {

  const [theme,setTheme]=useState("light")

  function lightTheme(){
    setTheme("light");
  }
  function darkTheme(){
    setTheme("dark");
  }

  // actaul change in theme by dom manipulation
  useEffect(()=>{
    console.log("change",theme);
    
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(theme);
  },[theme])

  return (
    <themeContext.Provider value={{themeMode:theme,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
