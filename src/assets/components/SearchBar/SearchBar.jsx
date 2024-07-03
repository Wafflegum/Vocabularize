import React, {useState} from 'react'
import "./SearchBar.css"

const SearchBar = ({fetch}) => {

    const [word, setWord] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        fetch(word)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" className="searchBar" value={word} onChange={(e) => setWord(e.target.value)}/>
                <button type="submit">Search</button>
            </form>

        </>
    )
}

export default SearchBar