import React, { Component } from 'react';

import Header from './Header';
import Profile from './Profile';
import FeedPage from './FeedPage';
import ContactPage from './ContactPage';
import PageNotFound from './404';
import ErrorBoundry from './ErrorBoundry';

import Swapi from '../services/swapi-service';
import { Provider } from './SwapiContext';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {

	/** 
	* todo => Picture rework
	* todo => Gallery add img btn
	*/

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
								}} />

							<Route component={PageNotFound} />
						</Switch>
					</Router>
				</Provider>
			</ErrorBoundry>
		);
	}
}
