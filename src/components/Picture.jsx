import React from 'react';

import { ReactComponent as Heart } from '../img/heart.svg';

import { forPicture } from './hoc-helpers';

const Picture = (props) => {

	const { img, onLike } = props
	
	const { url, likes, liked } = img

	let svgClass
	if (liked) {
		svgClass = 'liked'
	}

	return (
		<div className="picture"
			onDoubleClick={ onLike }
			style={{ backgroundImage: `url(${url})` }}>
				<div className="picture__likes">
					<Heart className={svgClass} />
					<span>{ likes }</span>
				</div>
		</div>
	)
}

export default forPicture(Picture)