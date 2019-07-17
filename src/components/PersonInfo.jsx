import React, { Component } from 'react';

import Loader from './Loader';

import { withSwapi } from './hoc-helpers';

class PersonInfo extends Component {

	state = {
		item: null,
		image: null
	}

	componentDidMount() {
		this.updateItem()
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		}
	}

	updateItem() {
		const { itemId, getData, getImageUrl } = this.props;
		if (!itemId) {
			return;
		}
		getData(itemId)
			.then((item) => {
				this.setState( {
					item,
					image: getImageUrl(item)
				} );
			})
	}

	render() { 

		const { item, image } = this.state;
		if (!item) {
			return <Loader />
		}

		const { name } = item;

		return (
			<div className="person">
				<div className="person__inner inner">
					<div className="person__img" style={{ backgroundImage: `url(${ image })`}}></div>
					<div className="person__content">
						<h2 className="person__title title">{ name }</h2>
						<ul className="person__info">
							{
								React.Children.map(this.props.children, (child) => {
									return React.cloneElement(child, { item })
								})
							}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

const mapMethodsToProps = (swapi) => {
	return {
		getData: swapi.getPerson,
		getImageUrl: swapi.getPersonImg,
		itemId: 4
	}
};

const InfoFields = ({ item, field, label}) => {
	return (
		<li className="person__item">
			{ label }
			<span>{ item[field] }</span>
		</li>
	)
}

export { InfoFields }

export default withSwapi(mapMethodsToProps)(PersonInfo)