import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import shortid from 'shortid';
import ListPhrases from './components/ListPhrases'

function App() {

  const [loadPhrases, setLoadPhrases] = useState(false);
  const [allPhrases, setAllPhrases] = useState([]);

  useEffect(() => {
    const array = JSON.parse(localStorage.getItem('arrayText'));
    if (array.length === 0) return;
    setAllPhrases(array);
  }, [])

  useEffect(() => {
    const array = JSON.parse(localStorage.getItem('arrayText'));
    setAllPhrases(array);
    setLoadPhrases(false);

  }, [loadPhrases])

  useEffect(() => {
    if (allPhrases.length === 0) return;
    localStorage.setItem('arrayText', JSON.stringify(allPhrases));
    setLoadPhrases(true);

  }, [allPhrases])

  const getData = (data) => {
    data.id = shortid.generate();
    setAllPhrases([
      ...allPhrases,
      data
    ]);
  }

  const deletePhrase = (index) => {

  }

  return (
    <Fragment>
      <div className="container">
        <Header />
        <Form
          getData={getData}
        />
        {(allPhrases.length === 0) ?
          (
            <p>No hay frases</p>
          )
          :
          (
            <ListPhrases
              allPhrases={allPhrases}
              deletePhrase={deletePhrase}
            />
          )
        }
      </div>
    </Fragment>
  );
}

export default App;
