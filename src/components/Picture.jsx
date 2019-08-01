import React, { Component } from 'react';

import { ReactComponent as Heart } from '../img/heart.svg';

import ImgService from '../services/picture-service';

import LazyLoad from 'react-lazyload';


export default class Picture extends Component {

	imgService = new ImgService();

	state = {}
	
	componentDidMount() {
		this.getImg();
	}

	getImg() {
		this.imgService.getImage()
			.then((url) => {
				this.setState({
					url,
					likes: Math.ceil(Math.random()*100),
					liked: false
				})
			})
	}

	onLike = () => {
		this.setState((state) => {
			
			const newItem = { ...state, liked: !state.liked }
			if (!newItem.liked) {
				newItem.likes -= 1
			} else {
				++newItem.likes
			}
			return newItem
		})
	}


	render() {

		const { url, likes, liked } = this.state

		let svgClass
		if (liked) {
			svgClass = 'liked'
		}

		return (
			<LazyLoad height={300} offset={100} once>
				<div className="picture"
					onDoubleClick={ this.onLike }
					style={{ backgroundImage: `url(${url})` }}>
						<div className="picture__likes">
							<Heart className={svgClass} />
							<span>{ likes }</span>
						</div>
				</div>
			</LazyLoad>
		)
	}
}