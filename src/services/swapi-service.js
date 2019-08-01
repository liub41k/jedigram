export default class Swapi {

	_apiBase = 'https://swapi.co/api';
	_imageBase = 'https://starwars-visualguide.com/assets/img';

	getResource = async(url) => {
		const res = await fetch(`${ this._apiBase }${ url }`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${ url }, received ${ res.status }`)
		}

		return await res.json();
	}

	getAllPeople = async() => {
		const res = await this.getResource(`/people/`);
		return res.results.map(this._transformUser);
	}

	getPerson = async(id) => {
		const person = await this.getResource(`/people/${ id }`);
		return this._transformPerson(person);
	}

	getPersonImg = (id) => {
		return `${this._imageBase}/characters/${id}.jpg`
	}

	_extractID = (item) => {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	}

	_transformPerson = (person) => {

		const id = this._extractID(person)
		
		return {
			id: id,
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
			avatar: this.getPersonImg(id)
		}
	}

	_transformUser = (person) => {

		const id = this._extractID(person)
		
		return {
			id,
			name: person.name,
			avatar: this.getPersonImg(id)
		}
	}
}