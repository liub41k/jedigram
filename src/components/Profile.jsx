import React from 'react';

import PersonInfo, { InfoFields } from './PersonInfo';
import Gallery from './Gallery';

const Profile = () => {
	return (
		<>
			<PersonInfo>
				<InfoFields label='Birth year: ' field='birthYear' />
				<InfoFields label='Gender: ' field='gender' />
				<InfoFields label='Eyes: ' field='eyeColor' />
			</PersonInfo>
			<Gallery />
		</>
	);
}
 
export default Profile;