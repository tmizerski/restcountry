import React, {createContext, useState} from "react";
import RestCountry from "./pages/RestCountry/RestCountry";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import {create} from "axios";

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => curr === "light" ? "dark" : "light")
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <RestCountry/>
        },
        {
            path: "/details/:name",
            element: <CountryDetails/>
        }
    ])

  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className="App" id={theme}>
            <RouterProvider router={router}/>
        </div>
      </ThemeContext.Provider>
  );
}

export default App;
