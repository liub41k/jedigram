export default class PictureService {

	_apiBase = 'https://picsum.photos';

	getImage = async() => {
		
		const res = await fetch(`${this._apiBase}/650`)
		
		if (!res.ok) {
			throw new Error(`Could not fetch image, received ${ res.status }`)
		}

		return await res
	}

	// getImage = async(width, height) => {
	// 	const res = await this.getResource(`/${width}/${height}`)
	// 	return res
	// }
}