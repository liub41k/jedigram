import React, { Component } from 'react';

import Picture from './Picture';

const GalleryItem = () => {
	return (
		<div className="gallery__item">
			<Picture />
		</div>
	)
}

export { GalleryItem }

export default class Gallery extends Component {

	state = {}

	render() {

		return (
			<section className="gallery">
				<div className="gallery__inner inner">
					<div className="gallery__content">
						{React.Children.map(this.props.children, (child) => {
								return child
							})}
					</div>
				</div>
			</section>
		);
	}
}