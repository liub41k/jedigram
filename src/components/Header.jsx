import React from 'react';

import { ReactComponent as Logo } from '../img/bb8.svg';
import { ReactComponent as Contacts } from '../img/death-star.svg';
import { ReactComponent as Profile } from '../img/yoda.svg';

const Header = () => {
	return (
		<header className="header">
			<div className="header__inner inner">
				<h1 className="header__logo logo">
					<a className='logo__link' href="#" title='Jedigram'>
						<Logo className='logo__icon' />
						<span>Jedigram</span>
					</a>
				</h1>
				<div className="header__search">
					<input type="text" placeholder='search'/>
				</div>
				<nav className="header__nav nav">
					<a href="#" className="nav__link" title='Contacts'>
						<Contacts />
					</a>
					<a href="#" className="nav__link" title='Profile'>
						<Profile />
					</a>
				</nav>
			</div>
		</header>
	);
}
 
export default Header;