import homeImage from '../assets/qgb-home.jpg'

export const Home = () => {

	return (
		<main>
			<div className='container-img-quote'>
				<div className='hero-img' style={{ backgroundImage: 'url(' + homeImage + ')' }}></div>
			</div>
		</main>
	);
}