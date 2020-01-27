import React, { useState } from 'react'

const Search = (props) => {

    const [searchTerm, setSearchTerm] = useState(
        ''
    )

    const formHandler = (event) => {
        event.preventDefault()
        props.store.dispatch({
            type: 'NEW_TERM',
            data: searchTerm
        })
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value)
    }



    return (
        <div className="App">
            <form onSubmit={formHandler}>
                <input value={searchTerm} onChange={handleSearchTermChange} placeholder="Enter a keyword like city, street or a brewery name"></input>
                <button type="submit"> Search</button>
            </form>
        </div>
    );
}
export default Search
