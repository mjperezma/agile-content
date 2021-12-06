import {useState, useEffect } from 'react';
import Header from './components/header';
import Search from './components/search';
import Footer from './components/footer';
import data  from './services/useGetData.js';

const list = data;

function App() {
  const [getSearchValue, setGetSearchValue] = useState();
  const [getResults, setResults] = useState([]);
 
    const onChange = (e) => {
      e.preventDefault();
      setGetSearchValue(e.target.value);
      
      const filterSearch = list.filter((item) => {
        return item.type.includes(getSearchValue);
      })

      setResults(filterSearch);
      console.log(filterSearch)
    }

  return (
   <>
    <Header results={getResults}/>
    {
      getResults.length > 0 ? (
        <>
          <p>Resultados al filtrar</p>
          <Search onChange={onChange} results={getResults} searchValue={getSearchValue}/> 
        </>  
      ) : (
        <Search onChange={onChange} /> 
      )
    }
    <Footer />
   </>
  );
}

export default App;
