import React from 'react';

import "./TopBar.css";

function TopBar(props) {
    return (
        <header className={"top-bar-container"}>
            <span className="top-bar-title">
                Where in the world?
            </span>
            <div className="toggle-theme">
                <span>Dark Mode</span>
            </div>
        </header>
    );
}

export default TopBar;