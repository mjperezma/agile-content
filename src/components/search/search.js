import SearchLogo from './search-logo.svg';
import {GoSearch, GoPlus} from 'react-icons/go';
import './search.scss';
const Search = ({onChange, getSearchValue}) => {
    return (
        <>
            <section className="search">
                {getSearchValue ? "" :         
                <img className="search__logo" src={SearchLogo} alt="Logo" />
            }
                <form className={`search__form ${getSearchValue && 'search__form--position'}`}>
                    <div className="search__container">
                        <GoSearch className="search__icon search__icon--search" />
                        <input type="text"  className="search__input" defaultValue={getSearchValue} onChange={onChange} autoFocus />
                        <GoPlus className="search__icon search__icon--delete" />
                    </div>
                    {getSearchValue ? "" :  
                    <input className="search__button" type="submit" value="Buscar" />
                    }
                </form>
            </section>
        </>
    )
}

export default Search;