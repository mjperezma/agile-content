import {useState} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Results from './pages/results';
import data  from './services/useGetData.js';
import { Route, Routes, Redir } from 'react-router'
const list = data;

function App() {
  const [getSearchValue, setGetSearchValue] = useState("");
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
    <Header results={getResults} getSearchValue={getSearchValue}/>
    <Routes>
      <Route path="/" element={<Home onChange={onChange} getResults={getResults} getSearchValue={getSearchValue} />} />
      {
        getSearchValue && (
              <Route path="/results" element={<Results getResults={getResults} getSearchValue={getSearchValue}/>} />
        )
      }
    </Routes>
    <Footer />
   </>
  );
}

export default App;
