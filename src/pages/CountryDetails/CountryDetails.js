import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import TopBar from "../../components/TopBar/TopBar";
import { BiArrowBack } from "react-icons/bi";

import "./CountryDetails.css";

function CountryDetails(props) {
    const [country, setCountry] = useState();
    const [allCountries, setAllCountries] = useState();
    const navigate = useNavigate();
    const params = useParams();


    function init() {
        setCountry(null);
        axios.get(`https://restcountries.com/v3.1/name/${params.name}`)
            .then(r => {
                const data = r.data[0]
                const country = {
                    commonName: data.name.common,
                    nativeName: Object.entries(data.name.nativeName)[0][1].common,
                    flag: data.flags.png,
                    population: data.population,
                    region: data.region,
                    subRegion: data.subregion,
                    capital: data.capital,
                    tld: data.tld,
                    currencies: Object.entries(data.currencies)[0][1].name,
                    languages: Object.entries(data.languages),
                    borders: data.borders
                }
                setCountry(country)
            }).then(()=> {
                axios.get("https://restcountries.com/v3.1/all")
                    .then(r => setAllCountries(r.data))
        })
            .catch(e => console.log(e.message))
    }

    useEffect(() => {
        init();
    }, [params])


    return (
        <>
            {country && <div className={"country-details-container"}>
                <TopBar/>
                <button
                    className={"back-button"}
                    onClick={()=>navigate("/")}
                ><BiArrowBack style={{fontSize:"18px"}}/> Back</button>
                <main className={"country-details-content"}>
                    <div className={"country-details-flag-container"}>
                        <img src={country.flag} alt={"flag"}/>
                    </div>
                    <section className={"content-section"}>
                        <div className={"content-title"}>
                            {country.commonName}
                        </div>
                        <ul className={"data-list"}>
                            <li className={"data-list-item"}>
                                <span className={"data-list-item-title"}>Native Name: </span>
                                {country.nativeName}
                            </li>
                            <li className={"data-list-item"}>
                                <span className={"data-list-item-title"}>Population: </span>
                                {country.population.toLocaleString()}
                            </li>
                            <li className={"data-list-item"}>
                                <span className={"data-list-item-title"}>Region: </span>
                                {country.region}
                            </li>
                            <li className={"data-list-item"}>
                                <span className={"data-list-item-title"}>Sub Region: </span>
                                {country.subRegion}
                            </li>
                            <li className={"data-list-item"}>
                                <span className={"data-list-item-title"}>Capital: </span>
                                {country.capital}
                            </li>
                            <li className={"data-list-item"}>
                                <span className={"data-list-item-title"}>Top Level Domain: </span>
                                {country.tld}
                            </li>
                            <li className={"data-list-item"}>
                                <span className={"data-list-item-title"}>Currencies: </span>
                                {country.currencies}
                            </li>
                            <li className={"data-list-item"}>
                                <span className={"data-list-item-title"}>Languages: </span>
                                {country.languages.map((lang) => {
                                    return lang[1]+" "
                                })}
                            </li>
                        </ul>
                        <div className={"borders-container"}>
                            <span>Borders: </span>
                            <ul className={"country-border-list"}>
                                {allCountries && country.borders &&
                                   Array.from(allCountries).map((land, k) =>{
                                       if(country.borders.includes(land.cioc) ||
                                           country.borders.includes(land.cca2) ||
                                           country.borders.includes(land.cca3) ||
                                           country.borders.includes(land.ccn3)
                                       ){
                                           return <Link
                                               key={k}
                                               to={`/details/${land.name.common}`}>
                                           <li className={"country-border-item"}>

                                               {land.name.common}
                                           </li>
                                           </Link>
                                       }
                                   })
                                }
                            </ul>
                        </div>
                    </section>
                </main>
            </div>}
        </>
    );
}

export default CountryDetails;