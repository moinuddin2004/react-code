import { createContext,useContext } from "react";
 
 export const ThemeContext=createContext({
    ThemeMode:"light",
    DarkTheme:()=>{},
    LightTheme:()=>{},
 });
 
 
 export const ThemeContextProvider=ThemeContext.Provider;


 
 export  function useTheme(){
    return useContext(ThemeContext);
 }
