import React from 'react';

import { ReactComponent as Page404 } from '../img/404.svg';

import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<div className="page-not-found">
			<div className='page-not-found__inner inner'>
				<div className="page-not-found__img">
					<Page404 />
				</div>
				<div className="page-not-found__content">
					<h2 className='page-not-found__title'>Page Not Found</h2>
					<Link to='/jedigram/'>Back to Home</Link>
				</div>
			</div>
		</div>
	);
}
 
export default PageNotFound;