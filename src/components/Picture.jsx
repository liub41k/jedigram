import React, { Component } from 'react';

import { ReactComponent as Heart } from '../img/heart.svg';

export default class Picture extends Component {
	state = {
		liked: false
	}

	onLike = (id) => {

		this.props.likeFn(id)

		this.setState(({liked}) => {
			return {
				liked: !liked
			}
		})
	}

	render() {

		// const { info } = this.props
		const { url, id, likes } = this.props.info
		const { liked } = this.state

		let svgClass
		if (liked) {
			svgClass = 'liked'
		}

		return (
			<div className="picture"
				style={{ backgroundImage: `url(${ url })`}}
				onDoubleClick={ () => { this.onLike(id) }}>
					<div className="picture__likes">
						<Heart className={svgClass} />
						<span>{ likes }</span>
					</div>
			</div>
		)
	}
}