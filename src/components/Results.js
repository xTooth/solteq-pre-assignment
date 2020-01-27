import React, { useState } from 'react'
import axios from 'axios'
import ListItem from './ListItem'


const Results = (props) => {
    const [breweries, setBreweries] = useState([])
    getJSON(props.store, setBreweries)
    if (breweries.length > 0){
        return (
            <div className="App">
                <ul>
                    {breweries.map(item => <ListItem item={item} key={item.id} />)}
                </ul>
            </div>
        )
    } else {
        return(
        <div className="App">
            <p className="text">Sadly nothing matched your search</p>
        </div>
        )
    }
    
}

const getJSON = (props, setBreweries) => {

    let apiURL
    if (props.getState() === '') {
        apiURL = 'https://api.openbrewerydb.org/breweries?per_page=50'

    } else {
        apiURL = 'https://api.openbrewerydb.org/breweries/search?query=' + props.getState()
    }
    axios
        .get(apiURL)
        .then(response => {
            setBreweries(response.data)
        })
}


export default Results