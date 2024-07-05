import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import SearchBar from './assets/components/SearchBar/SearchBar'
import ResultCard from './assets/components/ResultCard/ResultCard'

function App() {
  const [wordData, setWordData] = useState(null)

  function SetDarkMode() {
    document.querySelector('body').setAttribute('theme', 'dark');
  }

  function SetLightMode() {
    document.querySelector('body').setAttribute('theme', 'light');
  }

  function ToggleTheme (element) {
    if(element.target.checked)
      SetDarkMode();
    else
      SetLightMode();
  }

  const checker = (data) => {
    data ? data : ''
  }

  async function FetchWord(word) {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => 
        {
          setWordData(response.data[0])
        })
      .catch(error => {alert('Word not found' + ' ' + error.message)})
  }

  return (
    <main>
      
      <SearchBar fetch={FetchWord}/>
      {
          wordData ? <ResultCard 
            word={wordData.word ?? ''}
            phonetics={wordData.phonetic ?? ''}
            meanings={wordData.meanings ?? ''}
            audio={wordData.phonetics && wordData.phonetics.Length > 0 ? wordData.phonetics[wordData.phonetics.length - 1].audio : ''}/> 
        : 
          <ResultCard/>
      }

      <div className="footer">
        <label>
          <input type="checkbox" id='themeToggle' onChange={ToggleTheme}/>
          <span className="toggle"></span>
          <img src="https://img.icons8.com/?size=100&id=101342&format=png&color=2D3A47" alt="Dark mode" className='dark' />
          <img src="https://img.icons8.com/?size=100&id=60002&format=png&color=000000" alt="" className='light' />
        </label>

        <span>
          Created by
          <a href="https://github.com/Wafflegum" target='_blank'> Wafflegum </a>
        </span>
        </div>
    </main>
  )
}

export default App
