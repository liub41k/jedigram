import React, { Component } from 'react';

import ErrorBoundry from '../ErrorBoundry';

import LazyLoad from 'react-lazyload';

import ImgService from '../../services/picture-service';

const forPicture = (Comp) => {
	return class extends Component {

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

		render () {

			return(
				<ErrorBoundry>
					<LazyLoad height={300} offset={100} once>
						<Comp {...this.props} img={this.state} onLike={this.onLike} />
					</LazyLoad>
				</ErrorBoundry>
				)
		}
	}
}

export default forPicture