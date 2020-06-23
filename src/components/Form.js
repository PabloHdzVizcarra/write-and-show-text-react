import React, { useState } from 'react'

const Form = (props) => {

  const { getData } = props;

  const [formValue, setFormValue] = useState({
    phrase: '',
    author: ''
  });

  const { phrase, author } = formValue;

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(formValue);

    setFormValue({
      phrase: '',
      author: ''
    })

  }


  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label>Frase</label>
        <input
          type="text"
          className="form-control input-text"
          name="phrase"
          onChange={handleChange}
          value={phrase}
        />
      </div>
      <div className="form-group">
        <label>Autor</label>
        <input
          type="text"
          className="form-control"
          name="author"
          onChange={handleChange}
          value={author}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >Submit</button>
    </form>
  )
}

export default Form
