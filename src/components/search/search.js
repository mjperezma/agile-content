import SearchLogo from './search-logo.svg';
import {GoSearch, GoPlus} from 'react-icons/go';
import './search.scss';
import Results from '../../pages/results';
const Search = ({onChange, searchValue, results}) => {
    return (
        <>
            <section className="search">
                {searchValue ? "" :         
                <img className="search__logo" src={SearchLogo} alt="Logo" />
            }
                <form className="search__form">
                    <div className="search__container">
                        <GoSearch className="search__icon search__icon--search" />
                        <input type="text"  className="search__input" defaultValue={searchValue} onChange={onChange}/>
                        <GoPlus className="search__icon search__icon--delete" />
                    </div>
                    {searchValue ? "" :  
                    <input className="search__button" type="submit" value="Buscar" />
                    }
                </form>
            </section>
            <Results results={results} searchValue={searchValue}/>
        </>
    )
}

export default Search;