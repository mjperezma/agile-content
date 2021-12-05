import SearchLogo from './search-logo.svg';
import {GoSearch, GoPlus} from 'react-icons/go';
import './search.scss';

const Search = () => {
    return (
        <section className="search">
            <img className="search__logo" src={SearchLogo} alt="Logo" />
            <form className="search__form">
                <div className="search__container">
                    <GoSearch className="search__icon search__icon--search" />
                    <input type="text" className="search__input" />
                    <GoPlus className="search__icon search__icon--delete" />
                </div>
                <input className="search__button" type="submit" value="Buscar" />
            </form>
        </section>
    )
}

export default Search;