import SearchLogo from './search-logo.svg';
import {GoSearch, GoPlus} from 'react-icons/go';
import './search.scss';

const Search = ({onChange, results, searchValue}) => {
    console.log(results)
    
    return (
        <section className="search">
            {results && results.length > 0 ? "" :         
            <img className="search__logo" src={SearchLogo} alt="Logo" />
        }
            <form className="search__form">
                <div className="search__container">
                    <GoSearch className="search__icon search__icon--search" />
                    <input type="text"  className="search__input" value={searchValue} onChange={onChange}/>
                    <GoPlus className="search__icon search__icon--delete" />
                </div>
                {results && 
                results.length > 0 ? "" :  
                <input className="search__button" type="submit" value="Buscar" />
                }
            </form>
        </section>
    )
}

export default Search;