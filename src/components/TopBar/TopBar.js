import React, {useContext} from 'react';
import {BsMoon, BsSun} from 'react-icons/bs'
import {ThemeContext} from "../../App";
import "./TopBar.css";

function TopBar(props) {
    const themeContext = useContext(ThemeContext);
    const {toggleTheme, theme} = themeContext;

    return (
        <header className={"top-bar-container"}>
            <span className="top-bar-title">
                Where in the world?
            </span>
            <div className="toggle-theme">
                <span onClick={()=>toggleTheme()}>{theme === "light" ? <div><BsMoon/> Dark</div> : <div><BsSun/>Light</div> }</span>
            </div>
        </header>
    );
}

export default TopBar;