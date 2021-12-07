import { CgMenuGridR, CgProfile } from 'react-icons/cg';
import './header.scss';
import SearchLogo from './logo.svg';
import Profile from './profile.jpg';

const Header = ({results, getSearchValue}) => {
    return (
        <header className={`header ${results.length > 0 || getSearchValue !== ''  ? "header--heigth" : ""}`}> 
        {results.length > 0 || getSearchValue !== ''   ?  
            <img src={SearchLogo} alt="Logo-google" className="header__search" />  : 
            <a className="header__logo" href="/" title="Agile Content - Frontend test"><span className="header__logo--bold">Agile Content</span> Frontend Test</a>}
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <CgMenuGridR className="nav__list-icon" />
                    </li>
                    <li className="nav__list-item">
                        {results.length > 0 || getSearchValue !== '' ? <img className="nav__list-profile" src={Profile} alt="Profile"  /> : 
                        <CgProfile className="nav__list-icon" />
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;