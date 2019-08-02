import React, { Component } from 'react';

import Picture from './Picture';
import User from './User';

import {
	withData,
	withSwapi,
	compose
	} from './hoc-helpers';


class FeedPage extends Component {

	state = {
		currentPage: 1,
		itemsPerRage: 3
	}

	onPageChange = (e) => {
		this.setState({
			currentPage: Number(e.target.id)
		})
	}

	render() {

		const { users } = this.props;
		const { currentPage, itemsPerRage } = this.state

		const indexOfLastItem = currentPage * itemsPerRage//3
		const indexOfFirstItem = indexOfLastItem - itemsPerRage//0
		const currentItems = users.slice(indexOfFirstItem, indexOfLastItem)

		const posts = currentItems.map((item) => {

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

		const pageNums = []
		for (let i = 1; i <= Math.ceil(users.length/itemsPerRage); i++) {
			pageNums.push(i)
		}
		const pagination = pageNums.map(num => {

			const inputId = `toggle-${num}`
			const clazz = `label-${num} centered`
			const defaultChecked = num === 1 ? true : false

			return (
				<div className='toggle-group'
					key={num}>
						<input type='radio' name='toggle' id={inputId} defaultChecked={defaultChecked} />
						<label
							htmlFor={inputId}
							className={clazz}
							onClick={this.onPageChange}
							id={num}>
								{num}
						</label>
				</div>
			);
		 });


		return (
			<section className="feed">
				<div className="feed__inner inner">
					<div className="feed__main">
						<div className="pagination">
							{pagination}
						</div>
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