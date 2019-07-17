import React from 'react';

import PersonInfo, { InfoFields } from './PersonInfo';

const Profile = () => {
	return (
		<PersonInfo>
			<InfoFields label='Birth year: ' field='birthYear' />
			<InfoFields label='Gender: ' field='gender' />
			<InfoFields label='Eyes: ' field='eyeColor' />
		</PersonInfo>
	);
}
 
export default Profile;