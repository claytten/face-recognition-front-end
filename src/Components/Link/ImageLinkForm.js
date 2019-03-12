import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange , onButtonSubmit}) => {
	return (
		<div>
			<p className='f4 tc'>
				{'Put some link image from the internet and let see what happen'}
			</p>
			<div className='pa4 br3  form center shadow-5 '>
				<input type='text' className='tc f4 pa2 w-70' onChange={onInputChange} />
				<button 
					className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer' 
					onClick={onButtonSubmit}
				>Detect</button>
			</div>
		</div>
	);
}

export default ImageLinkForm;