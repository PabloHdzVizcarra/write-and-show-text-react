import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import shortid from 'shortid';
import ListPhrases from './components/ListPhrases'

function App() {

  const [arrayPhrases, setArrayPhrases] = useState([]);

  const getData = (data) => {
    data.id = shortid.generate();
    setArrayPhrases([
      ...arrayPhrases,
      data
    ]);
  }

  return (
    <Fragment>
      <div className="container">
        <Header />
        <Form
          getData={getData}
        />
        {(arrayPhrases.length === 0) ?
          (
            <p>No hay frases</p>
          )
          :
          (
            <ListPhrases
              arrayPhrases={arrayPhrases}
            />
          )
        }
      </div>
    </Fragment>
  );
}

export default App;
