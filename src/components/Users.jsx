import React, { Component } from 'react';

import User from './User';

class Users extends Component {

	state = {
		term: ''
	}

	onSearchChange = (e) => {
		const term = e.target.value
		this.setState({ term });
	};

	search( items, term ) {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
		})
	}

	render() {

		const { users } = this.props
		const { term } = this.state

		const visibleItems = this.search( users, term );

		const visibleUsers = visibleItems.map((item) => {

			const { id } = item
			
			return(
				<li key={id}>
					<User {...item} min/>
				</li>
			)
		})

		return (
			<div className="users">
				<div className="users__search">
					<input 
						type="search"
						placeholder="search..."
						className="search"
						onChange={ this.onSearchChange }
						value= { this.state.term } />
				</div>
				<ul className="users__list">
					{ visibleUsers }
				</ul>
			</div>
		);
	}
}
 
export default Users;