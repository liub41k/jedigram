import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

const Comp = ({text}) => <div className="marker">{text}</div>

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 50.450670,
			lng: 30.5231
		},
		zoom: 18
	};
 
	render() {
		return (
			<div className="map">
				<GoogleMapReact
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom} >

					<Comp
						lat={50.450670}
						lng={30.523106}
						text="A" />
				</GoogleMapReact>
			</div>
	  );
	}
 }
 
 export default SimpleMap;