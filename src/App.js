import {useState} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Results from './pages/results';
import data  from './services/useGetData.js';
import Search from './components/search';
const list = data;

function App() {
  const [getSearchValue, setGetSearchValue] = useState("");
  const [getResults, setResults] = useState([]);
 
    const onChange = (e) => {
      e.preventDefault();
      e.target.focus();
      setGetSearchValue(e.target.value);
      
      const filterSearch = list.filter((item) => {
        return item.type.includes(getSearchValue);
      })

      setResults(filterSearch);
      console.log(filterSearch)
    }

  return (
   <>
    <Header results={getResults} getSearchValue={getSearchValue} onChange={onChange} />
      {
        getSearchValue ? (
              <Results results={getResults} getSearchValue={getSearchValue}/>
        ) : <Search onChange={onChange} results={getResults} getSearchValue={getSearchValue}/>
      }
    <Footer />
   </>
  );
}

export default App;
