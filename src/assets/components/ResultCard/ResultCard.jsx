import React from 'react'
import './ResultCard.css'

const ResultCard = ({ wordData }) => {
  return (
    <main>
        <div className="title">
            {wordData.word}
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
    </main>
  )
}

export default ResultCard