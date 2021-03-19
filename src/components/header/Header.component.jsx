import {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
//STYLES
import './header.style.scss'

class Header extends Component {
    state = {}
    render() {
        return(
            <div className='header'>
                <div className="header__logo">
                    <Link to="/">
                        Logo
                        <img
                            className="header__logo-img"
                            src="" alt=""
                        />
                    </Link>
                </div>
                <nav className="header__nav-bar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;

