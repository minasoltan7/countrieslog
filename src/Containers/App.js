import React, { Component } from "react";
import CountriesList from "../Components/countriesList.js";
import Searchbox from "../Components/searchbox.js";
import "./App.css";
import Scroll from "../Components/Scroll.js";

class App extends Component {
    constructor() {
        super();

        this.state = {
            Countries: [],
            searchfield: " "
        }

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all").then(response => {
            return response.json()
        }).then(data => {
            this.setState({ Countries: data })
        })

    }

    render() {
        const filteredCountries = this.state.Countries.filter((country) => {
            return (country.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
        })




        return (
            <div className="tc">
                <div class="container1">
                    <h1 class="title1">C</h1>
                    <h1 class="title">ountries&nbsp;</h1>
                    <h1 class="title1">L</h1>
                    <h1 class="title">og</h1>
                </div>

                <Searchbox searchChange={this.onSearchChange} />
                <Scroll>
                    <div>
                        <CountriesList countries={filteredCountries} />
                    </div>
                </Scroll>
            </div>
        )
    }


}


export default App;
