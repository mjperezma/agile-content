import { CgMenuGridR, CgProfile } from 'react-icons/cg';
import './header.scss';

const Header = () => {
    return (
        <header className="header"> 
            <a className="header__logo" href="#" title="Agile Content - Frontend test"><span className="header__logo--bold">Agile Content</span> Frontend Test</a>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <CgMenuGridR className="nav__list-icon" />
                    </li>
                    <li className="nav__list-item">
                        <CgProfile className="nav__list-icon" />
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;