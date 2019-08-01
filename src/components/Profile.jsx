import React from 'react';

import PersonInfo, { InfoFields } from './PersonInfo';
import Gallery, { GalleryItem } from './Gallery';

const Profile = (props) => {

	const { itemId } = props

	return (
		<>
			<PersonInfo itemId={itemId}>
				<InfoFields label='Birth year: ' field='birthYear' />
				<InfoFields label='Gender: ' field='gender' />
				<InfoFields label='Eyes: ' field='eyeColor' />
			</PersonInfo>
			<Gallery>
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
			</Gallery>
		</>
	);
}
 
export default Profile;