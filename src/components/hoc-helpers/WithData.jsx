import React, { Component } from 'react';

import Loader from '../Loader';
import ErrorBoundry from '../ErrorBoundry';

const withData = (Comp) => {
	return class extends Component {

		state = {
			data: null,
			loading: true
		};
	
		componentDidMount() {
			this.update();
		}

		update() {
			this.setState( {
				loading: true
			});

			this.props.getData()
				.then((data) => {
					this.setState({
						data,
						loading: false
					});
				})
		 }

		render () {
			
			const { data, loading } = this.state;
			
			if (loading) {
				return <Loader />
			}
			
			return(
				<ErrorBoundry>
					<Comp {...this.props} users={ data } />
				</ErrorBoundry>
				)
		}
	}
}

export default withData;