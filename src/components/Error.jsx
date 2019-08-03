import React from 'react';

import icon from '../img/error-img.png';

const ErrorIndicator = () => {
	return (
		<div className="inner centered">
			<div className="error">
				<img src={icon} alt="error icon"/>
				<span className="boom">BOOM!</span>
				<span>
					something has gone terribly wrong
				</span>
				<span>
					(but we already sent droids to fix it)
				</span>
			</div>
		</div>
	);
};

export default ErrorIndicator;