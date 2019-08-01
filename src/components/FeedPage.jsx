import React, { Component } from 'react';

import Picture from './Picture';
import User from './User';

import {
	withData,
	withSwapi,
	compose
	} from './hoc-helpers';


class FeedPage extends Component {

	// state = {
	// 	users: [],
	// 	loading: true
	// }

	// componentDidMount() {
	// 	this.updateUsers()
	// }

	// updateUsers = () => {
	// 	this.setState( {
	// 		loading: true
	// 	});

	// 	this.props.getData()
	// 		.then((users) => {
	// 			this.setState({
	// 				users,
	// 				loading: false
	// 			})
	// 		})
	// }

	render() {

		const { users } = this.props;

		const posts = users.map((item) => {

			const { id } = item
			
			return(
				<article key={id} className="post">
					<User {...item}/>
					<Picture></Picture>
				</article>
			)
		})

		const friends = users.map((item) => {

			const { id } = item
			
			return(
				<User key={id} {...item} min/>
			)
		})

		return (
			<section className="feed">
				<div className="feed__inner inner">
					<div className="feed__main">
						{ posts }
					</div>
					<aside className="feed__aside">
						{ friends }
					</aside>
				</div>
			</section>
		);
	}
}

const mapMethodsToProps = (swapi) => {
	return {
		getData: swapi.getAllPeople
	}
};

export default compose(
							withSwapi(mapMethodsToProps),
							withData
							)(FeedPage)