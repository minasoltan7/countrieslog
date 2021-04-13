import React from "react";
import "./countryCard.css"
function CountryCard(props) {



    const { name, flag, region, population, capital, area } = props;
    return (


        <div class="countrycard" >
            <h2>{name}</h2>
            <img class="img-rounded-corners" width="200" height="121" src={flag} alt="FLAG" />
            <p>Capital : {capital}</p>
            <p>Region : {region} </p>
            <p>Population :{population}</p>
            <p>Area :{area}</p>
        </div>
    )
}

export default CountryCard;