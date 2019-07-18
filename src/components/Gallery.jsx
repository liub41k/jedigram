import React, { Component } from 'react';

import Picture from './Picture';

export default class Gallery extends Component {

	state = {
		images: [
			{ url: 'https://picsum.photos/615', id:1 , likes: 42 },
			{ url: 'https://picsum.photos/615', id:2 , likes: 42 },
			{ url: 'https://picsum.photos/615', id:3 , likes: 42 },
			{ url: 'https://picsum.photos/615', id:4 , likes: 42 },
			{ url: 'https://picsum.photos/615', id:5 , likes: 42 },
			{ url: 'https://picsum.photos/615', id:6 , likes: 42 }
		]
	}

	onLike = (id) => {
		this.setState(({images}) => {
			const idx = images.findIndex((el) => el.id === id)

			const oldItem = images[idx]
			const newItem = { ...oldItem, likes: ++oldItem.likes}
			
			const newArr = [
				...images.slice(0, idx),
				newItem,
				...images.slice(idx + 1),
			]
			return {
				images: newArr
			}
		})
	}

	render() {

		const { images } = this.state

		const galleryItem = images.map((item) => {
			return (
				<div key={item.id} className="gallery__item">
					<Picture info={ item } likeFn={ (id) => {this.onLike(id)} } />
				</div>
			)
		})

		return (
			<section className="gallery">
				<div className="gallery__inner inner">
					<div className="gallery__content">
						{ galleryItem }
					</div>
				</div>
			</section>
		);
	}
}