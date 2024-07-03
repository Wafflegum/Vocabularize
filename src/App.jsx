import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import SearchBar from './assets/components/SearchBar/SearchBar'
import ResultCard from './assets/components/ResultCard/ResultCard'

function App() {
  const [wordData, setWordData] = useState(null)

  async function FetchWord(word) {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => 
        {
          setWordData(response.data[0])
        })
      .catch(error => {console.error(error)})
  }

  return (
    <main>
      
      <SearchBar fetch={FetchWord}/>
      {
        wordData ? <ResultCard wordData={wordData} /> : ''

      }
    </main>
  )
}

export default App
