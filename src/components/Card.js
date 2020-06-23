import React from 'react'

const Card = (props) => {
  const { phrase: {author, phrase} } = props;
  return (
    <div className="card mb-4">
    <div className="card-body">
      <p className="card-text">{phrase}</p>
      <h5 className="card-title">{author}</h5>
    </div>
  </div>
  )
}

export default Card
