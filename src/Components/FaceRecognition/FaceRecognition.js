import React from 'react';
// import Face from './Face';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
	// const faceBox = ({Box}) => {
	// 	return Box.map( (user,i) => {
	// 		return (
	// 			<Face
	// 				key={Box[i]}
	// 				Top={Box[i].topRow}
	// 				Right={Box[i].rightCol}
	// 				Bottom={Box[i].bottomRow}
	// 				Left={Box[i].leftCol}
	// 			/>
	// 		);
	// 	});
	// }
	// console.log(faceBox);

	
	return (
		<div className='center centered'>
				<div className='absolute center mt2'>
		        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
		        {boxes.map(box => {
		        return <div key={box.topRow} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
		      	})
		      	}
		      </div>
		</div>
	);
}

export default FaceRecognition;