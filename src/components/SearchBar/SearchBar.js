import React, {useContext} from 'react';
import Select from "react-select";
import {FaSistrix} from "react-icons/fa";

import "./SearchBar.css";
import {ThemeContext} from "../../App";

function SearchBar({inputValue, setInputValue, region, setRegion}) {

    const themeContext = useContext(ThemeContext);
    const {theme} = themeContext;

    return (
        <div className={"search-bar-container"}>
            <div className="search-bar-input-holder">
                <FaSistrix className={"search-icon"}/>
                <input
                    className={"search-bar-input"}
                    type={"text"}
                    placeholder={`Search for a country`}
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}
                />
            </div>
            <Select
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        minWidth: "max(15vw, 200px)",
                        background: theme === "light" ? "var(--White)" : "var(--Dark-Blue-DM)",
                        color: theme === "light" ? "darkgray" : "white",
                    }),
                }}
                theme={(t) => ({
                    ...t,
                    colors: {
                        // ...t.colors,
                        neutral0: theme === "light" ? "white" : "var(--Dark-Blue-DM)",
                        primary: theme === "light" ? "gray" : "lightgray",
                        primary25: theme === "light" ? "lightgray" : "very-lightgray"
                    }
                })}
                options={[
                    {value: "" , label: "Filter by region"},
                    {value: "africa", label: "Africa"},
                    {value: "america", label: "America"},
                    {value: "asia", label: "Asia"},
                    {value: "europe", label: "Europe"},
                    {value: "oceania", label: "Oceania"},
                    ]
                }
                placeholder={`Filter by region`}
                value={region}
                onChange={setRegion}
            />
        </div>
    );
}

export default SearchBar;