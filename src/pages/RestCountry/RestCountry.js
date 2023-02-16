import React, {useEffect, useState} from 'react';
import TopBar from "../../components/TopBar/TopBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import GridList from "../../components/GridList/GridList";
import './restcountry.css';
import axios from "axios";


function RestCountry() {
    const [countries, setCountries] = useState();
    const [inputValue, setInputValue] = useState();
    const [region, setRegion] = useState();

    const init = async () => {
        try {
            const result = await axios.get("https://restcountries.com/v3.1/all");
            const {data} = result;
            setCountries(data);
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        init()
    },[])

    useEffect(() => {
        if(region && region.label !== "Filter by region"){
            axios.get(`https://restcountries.com/v3.1/region/${region.value}`)
                .then( r => {
                    setCountries(null);
                    setCountries(r.data);
                })
        } else {
            init()
        }
    },[region])

    return (
        <div className={"restcountry-container"}>
            <TopBar/>
            <SearchBar
                setInputValue={setInputValue}
                inputValue={inputValue}
                region={region}
                setRegion={setRegion}
            />
            <GridList
                countries={countries}
                inputValue={inputValue}
            />
        </div>
    );
}

export default RestCountry;