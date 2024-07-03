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
                <input type="text" className="searchBar" placeholder="Search..." value={word} onChange={(e) => setWord(e.target.value)}/>
                <button type="submit" className='searchBtn'>
                    <img src="https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=000000" alt="" />
                </button>
            </form>

        </>
    )
}

export default SearchBar