import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../img/bb8.svg';
import { ReactComponent as Contacts } from '../img/death-star.svg';
import { ReactComponent as Profile } from '../img/yoda.svg';

const Header = () => {
	return (
		<header className="header">
			<div className="header__inner inner">
				<h1 className="header__logo logo">
					<Link className='logo__link' to="/jedigram/" title='Jedigram'>
						<Logo className='logo__icon' />
						<span>Jedigram</span>
					</Link>
				</h1>
				<div className="header__search">
					<input type="text" placeholder='search'/>
				</div>
				<nav className="header__nav nav">
					<Link to="/jedigram/contacts/" className="nav__link" title='Contacts'>
						<Contacts />
					</Link>
					<Link to="/jedigram/profile/" className="nav__link" title='Profile'>
						<Profile />
					</Link>
				</nav>
			</div>
		</header>
	);
}
 
export default Header;