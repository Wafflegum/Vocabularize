import React from 'react'
import useSound from 'use-sound';

import './ResultCard.css'

const ResultCard = ({ word, phonetics, meanings, audio }) => {
    const [playSound] = useSound(audio)

    return (
        <card>
            {
                word ? 
                    ''
                : 
                    <>
                        <h2 style={{textAlign: 'center'}}>Welcome to Vocabularize!</h2>
                        <p style={{textAlign: 'center'}}>This is a simple dictionary created with react + dictionarydev.api.</p>
                    </>
            }
            <div className="header">
                <div className="title">
                    {word}
                </div>
                <div className="phonetics">
                    {phonetics ? phonetics : ''}
                </div>
                {
                    audio ? 
                        <div className="pronunciation" onClick={audio ? playSound : null}>
                            <img src="https://img.icons8.com/?size=100&id=2795&format=png&color=000000" alt="play audio"  />
                        </div>
                     : ''

                }
                
            </div>

            <div className="meaning">
                {meanings?.map((def) => {

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