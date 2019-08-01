import React from 'react';

import { withRouter } from 'react-router-dom';

const User = (props) => {

	const { min, slide, name, avatar, id, history } = props

	return (
		<div className={ min ? "user user--min" : slide ? "user user--slide" : "user" }
			onClick={() => history.push(`/jedigram/profile/${id}`)}>
			<div className="user__img"
				style={{ backgroundImage: `url(${avatar})`}}>
			</div>
			<div className="user__name">
				{name}
			</div>
		</div>
	);
}

export default withRouter(User);