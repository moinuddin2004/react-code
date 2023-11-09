import { useEffect, useState } from "react"
import { ThemeContextProvider } from "./contexts/Theme";

import {ThemeBtn} from "./components/ThemeBtn.jsx"
import {Card} from "./components/Card.jsx"



function App() {
 
  const [ThemeMode,setThemeMode]=useState("light");

const DarkTheme=()=>{
  setThemeMode("dark")
}

const LightTheme=()=>{
  setThemeMode("light")
}

useEffect(()=>{
  let theme=document.querySelector('html')
  theme.classList.remove('dark','light')
  theme.classList.add(ThemeMode)
},[ThemeMode])


  return (
   <ThemeContextProvider value={{DarkTheme,LightTheme,ThemeMode}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                   <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>
            </ThemeContextProvider>

  
  )
}

export default App
