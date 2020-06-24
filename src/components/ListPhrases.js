import React from 'react'
import Card from './Card'

const ListPhrases = (props) => {
  const { deletePhrase, allPhrases } = props;


  return (
    <div className="container">
      <h1 className="text-center mt-4">Tus Frases</h1>
      {allPhrases.map((phrase, index) => (
        <Card
          key={phrase.id}
          phrase={phrase}
          index={index}
          deletePhrase={deletePhrase}
        />
      ))}
    </div>
  )
}

export default ListPhrases
