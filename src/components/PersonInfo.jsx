import React, { Component } from 'react';

import Loader from './Loader';

import { withSwapi } from './hoc-helpers';

class PersonInfo extends Component {

	static defaultProps = {
		itemId: 4
	}

	state = {
		item: null
	}

	componentDidMount() {
		this.updateItem()
	}

	// componentDidUpdate(prevProps) {
	// 	if (this.props.itemId !== prevProps.itemId) {
	// 		this.updateItem();
	// 	}
	// }

	updateItem() {
		const { itemId, getData } = this.props;
		
		if (!itemId) {
			return;
		}
		getData(itemId)
			.then((item) => {
				this.setState( {
					item
				} );
			})
	}

	render() { 

		const { item } = this.state;
		if (!item) {
			return <Loader />
		}

		const { name, avatar } = item;

		return (
			<div className="person">
				<div className="person__inner inner">
					<div className="person__img" style={{ backgroundImage: `url(${ avatar })`}}></div>
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
		getData: swapi.getPerson
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