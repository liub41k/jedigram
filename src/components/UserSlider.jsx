import React from 'react';

import Slider from 'react-slick';

import User from './User';

import {
	withData,
	withSwapi,
	compose
	} from './hoc-helpers';

const UserSlider = (props) => {

	const { users } = props

	const items = users.map((item) => {
		
		const { id } = item

		return(
			<div key={id} className="slider-wrap">
				<User {...item} slide />
			</div>
		)
	})

	var settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
			}
		]
	}

	return(
		<div className="slider">
			<Slider {...settings}>
				{items}
			</Slider>
		</div>
	)
}


const mapMethodsToProps = (swapi) => {
	return {
		getData: swapi.getAllPeople
	}
};

export default compose(
							withSwapi(mapMethodsToProps),
							withData
							)(UserSlider)