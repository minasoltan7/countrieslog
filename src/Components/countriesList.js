import React from "react";
import CountryCard from './countryCard';


const CountriesList = (props) => {
    const { countries } = props;

    const Array = countries.map((country, i) => {
        return (
            <CountryCard
                key={i}
                name={countries[i].name}
                flag={countries[i].flag}
                region={countries[i].region}
                population={countries[i].population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                capital={countries[i].capital}
                area={countries[i].area + " Km2"}


            />

        )
    })
    return (
        <div class="container">
            {Array}
        </div>
    )
}
export default CountriesList;