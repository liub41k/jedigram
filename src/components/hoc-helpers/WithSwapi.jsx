import React from 'react';

import { Consumer } from "../SwapiContext";

const withSwapi = (mapMethodsToProps) => (Wrapped) => {
	return (props) => {
		return (
			<Consumer>
				{
					(swapi) => {
						const serviceProps = mapMethodsToProps(swapi);
						return(
							<Wrapped {...props} {...serviceProps} />
						)
					}
				}
			</Consumer>
		)
	}
}

export default withSwapi;