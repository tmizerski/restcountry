import React from 'react';
import "./GridList.css";

function GridList({countries, inputValue}) {

    function sortCountries () {
        return  (a, b) => {
            let ca = a.name.common.toLowerCase(),
                cb = b.name.common.toLowerCase();

            if (ca < cb) {
                return -1;
            }
            if (ca > cb) {
                return 1;
            }
            return 0;
        }
    }

    return (
        <div className={"grid-list-container"}>
            {countries &&
                countries
                    .sort(sortCountries())
                    .filter((country, k) => {
                    return inputValue ?
                        country.name.common.toLowerCase().includes(inputValue) : country
                })
                    .map((country, idx) => {
                    return <div key={idx} className={"country-card-container"}>
                        <div className="country-flag">
                            <img
                                src={country.flags.png}
                                alt={country.flags.alt}
                                className={"country-flag-img"}
                            />
                        </div>

                        <div className="country-data">
                            <h3>{country.name.common}</h3>
                            <p><span>Population: </span>{country.population.toLocaleString()}</p>
                            <p><span>Region: </span>{country.region}</p>
                            <p><span>Capital: </span>{country.capital}</p>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default GridList;