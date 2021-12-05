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
    }

  return (
   <>
    <Header />
    <Search onChange={onChange} />
    <Footer />
   </>
  );
}

export default App;
