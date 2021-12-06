import { CgMenuGridR, CgProfile } from 'react-icons/cg';
import './header.scss';
import SearchLogo from './logo.svg';
import Profile from './profile.jpg';

const Header = ({results}) => {
    return (
        <header className={`header ${results.length > 0 ? "header--heigth" : ""}`}> 
        {results.length > 0  ?  
            <img src={SearchLogo} alt="Logo-google" className="header__search" />  : 
            <a className="header__logo" href="/" title="Agile Content - Frontend test"><span className="header__logo--bold">Agile Content</span> Frontend Test</a>}
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <CgMenuGridR className="nav__list-icon" />
                    </li>
                    <li className="nav__list-item">
                        {results.length > 0 ? <img className="nav__list-profile" src={Profile} alt="Profile"  /> : 
                        <CgProfile className="nav__list-icon" />
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;