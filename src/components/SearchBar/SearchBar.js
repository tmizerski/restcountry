import React from 'react';
import Select from "react-select";
import {FaSistrix} from "react-icons/fa";

import "./SearchBar.css";

function SearchBar({inputValue, setInputValue, region, setRegion}) {
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
                    }),
                }}
                options={[
                    {value: "Africa", label: "Africa"},
                    {value: "America", label: "America"},
                    {value: "Asia", label: "Asia"},
                    {value: "Europe", label: "Europe"},
                    {value: "Oceania", label: "Oceania"},
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