import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import shortid from 'shortid';
import ListPhrases from './components/ListPhrases'

function App() {

  const [allPhrases, setAllPhrases] = useState([]);
  const [reload, setReload] = useState(false)

  // effect para verificar si tenemos frases guardadas al cargar la pagina
  // useEffect(() => {
  //   const array = JSON.parse(localStorage.getItem('arrayText'));
  //   if (array.length === 0) return;
  //   setAllPhrases([]);
  // }, [])

  // effect para traer todas las frases del local Storage


  useEffect(() => {
    if (allPhrases.length === 0) return;
    const array = JSON.parse(localStorage.getItem('arrayText'));
    setAllPhrases(array);
    setReload(false);
    //eslint-disable-next-line
  }, [reload]);

  // effect para colocar las frases en el local Storage
  useEffect(() => {
    if (allPhrases.length === 0) return;
    localStorage.setItem('arrayText', JSON.stringify(allPhrases));

  }, [allPhrases]);

  // funcion que guarda el resultado del form
  const getData = (data) => {
    data.id = shortid.generate();
    setAllPhrases([
      ...allPhrases,
      data
    ]);

  }

  const deletePhrase = (id) => {
    const editArray = JSON.parse(localStorage.getItem('arrayText'));
    localStorage.setItem('arrayText', JSON.stringify(editArray.filter((element) => element.id !== id)));

    setReload(true)
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
