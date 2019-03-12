import React from 'react';

const Face = ({Top,Right,Bottom,Left}) => {
	return (
		<div className='bounding-box' style={{top: Top, right: Right, bottom: Bottom, left: Left }}>
		</div>
	);
}

export default Face;