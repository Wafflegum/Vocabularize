import React from 'react'
import useSound from 'use-sound';

import './ResultCard.css'

const ResultCard = ({ wordData }) => {
    const [playSound] = useSound(wordData.phonetics[wordData.phonetics.length - 1].audio)
    console.log(wordData.phonetics)

    return (
        <card>
            <div className="header">
                <div className="title">
                    {wordData.word}
                </div>
                <div className="phonetics">
                    {wordData.phonetic}
                </div>
                <div className="pronunciation" onClick={playSound}>
                    <img src="https://img.icons8.com/?size=100&id=2795&format=png&color=000000" alt="play audio"  />
                </div>
            </div>

            <div className="meaning">
                {wordData.meanings.map((def) => {

                    return (
                        <div className="definitions" key={def.id}> 
                            <div className="subtitle">{def.partOfSpeech.toUpperCase()}</div>
                            {def.definitions.slice(0, 3).map(e => {
                                return (<span key={e.index}>- {e.definition}</span>)
                            })}
                            {def.definitions.example}
                        </div>
                    )
                })}
                
            </div>
        </card>
    )
}

export default ResultCard