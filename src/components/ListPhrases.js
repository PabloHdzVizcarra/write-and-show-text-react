import React from 'react'
import Card from './Card'

const ListPhrases = (props) => {
  const { arrayPhrases } = props;

  return (
    <div className="container">
      <h1 className="text-center mt-4">Tus Frases</h1>
      {arrayPhrases.map((phrase) => (
        <Card
          key={phrase.id}
          phrase={phrase}
        />
      ))}
    </div>
  )
}

export default ListPhrases
