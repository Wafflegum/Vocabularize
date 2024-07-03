import React from 'react'
import './ResultCard.css'

const ResultCard = ({ wordData }) => {
  return (
    <card>
        <div className="header">
            <div className="title">
                {wordData.word}
            </div>
            <div className="phonetics">
                {wordData.phonetic}
            </div>
        </div>

        <div className="meaning">
            {wordData.meanings.map((def) => {

                return (
                    <div className="definitions" key={def.id}> 
                        {def.partOfSpeech} 
                        {def.definitions.slice(0, 3).map(e => {
                            return (<span>{e.definition}</span>)
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