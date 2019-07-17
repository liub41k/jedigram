import React, { Component } from 'react';

import Header from './Header';
import Profile from './Profile';
import ErrorBoundry from './ErrorBoundry';

import Swapi from '../services/swapi-service';
import { Provider } from './SwapiContext';

import ImgService from '../services/picture-service';

export default class App extends Component {

	swapi = new Swapi();

	imgService = new ImgService();
	
	
	state = {
		image: null
	}

	componentDidMount() {
		this.getImg()
	}

	getImg = () => {
		this.imgService.getImage()
			.then((result) => {
				this.setState({
					image: result.url
				})
			})
	}
	
	
	render() { 

		return (
			<ErrorBoundry>
				<Provider value={ this.swapi }>
					<Header />

					<Profile />
				</Provider>
			</ErrorBoundry>
		);
	}
}
