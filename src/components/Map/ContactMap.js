import React from 'react';
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap
} from 'react-google-maps';

const ContactMap = (props) =>{
	return(
		<GoogleMap
			defaultZoom={19}
			defaultCenter={{lat: 4.6207397,lng: -74.1638988}}
		/>
	);
}

export default withScriptjs(
	withGoogleMap(
		ContactMap
	)
);

