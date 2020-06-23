import React from 'react';

const Card = (props) => {
  const { phrase: { author, phrase }, deletePhrase } = props;


  const handleClick = (e) => {
    e.preventDefault();
  }
  return (
    <div className="card mb-4">
    <div className="card-body">
      <p className="card-text text-capitalize">{phrase}</p>
        <h5 className="card-title text-capitalize">{author}</h5>
    </div>
      <button
        type="button"
        className="btn btn-danger button-delete-phrase"
        onClick={(e) => handleClick(e)}
      >Elminar</button>
  </div>
  )
}

export default Card;
