import { PageContainer } from '../components/PageContainer';

export const Meditations = () => {

	return (
		<PageContainer pageTitle='Meditations'>
			<h4>Relax, Ground, and Clear</h4>
			<div className='videoContainer'>
				<iframe 
					className='responsiveIframe'
					title='Relax, Ground, and Clear'
					src='https://drive.google.com/file/d/11iXfDkX9VMHldT-TgtN7lLK8WH8iwz01/preview' 
					allow='autoplay'>
				</iframe>
			</div>

			<h4>Safety, Comfort, and Relaxation</h4>
			<div className='videoContainer'>
				<iframe 
					className='responsiveIframe'
					title='Safety, Comfort, and Relaxation'
					src='https://drive.google.com/file/d/1UnFedJn8-dxF7meNPyiIcMzTCyXPhDBj/preview' 
					allow='autoplay'>
				</iframe>
			</div>
		</PageContainer>
	);
}