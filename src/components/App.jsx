import React, { Component } from 'react';

import Header from './Header';
import Profile from './Profile';
import FeedPage from './FeedPage';
import ContactPage from './ContactPage';
import ErrorBoundry from './ErrorBoundry';

import Swapi from '../services/swapi-service';
import { Provider } from './SwapiContext';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

export default class App extends Component {

	swapi = new Swapi();

	render() {
		return (
			<ErrorBoundry>
				<Provider value={ this.swapi }>
					<Router>

						<Header />

						<Switch>
							<Route path='/jedigram/' component={ FeedPage } exact />

							<Route path='/jedigram/contacts/' component={ ContactPage } />

							<Route path='/jedigram/profile/' component={ Profile } exact />
							
							<Route path='/jedigram/profile/:id' 
								render={({match}) => {
									const {id} = match.params
									return <Profile itemId={id} />
								}}
							/>

							<Redirect to='/jedigram/' />{/* 404 here */}
						</Switch>
					</Router>
				</Provider>
			</ErrorBoundry>
		);
	}
}
