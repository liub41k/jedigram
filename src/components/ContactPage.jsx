import React from 'react';

import UserSlider from './UserSlider';
import Map from './Map';

const ContactPage = () => {
	return (
		<section className="contacts">
			<div className="contacts__inner inner">
				<div className="contacts__slider">
					<UserSlider />
				</div>
				<div className="contacts__map">
					<Map />
				</div>
			</div>
		</section>
	)
}
 
export default ContactPage