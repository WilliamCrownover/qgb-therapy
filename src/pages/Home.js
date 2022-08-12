import homeImage from "../assets/qgb-home.jpg"

export default function Home() {

	return (
		<main>
			<div className="container-img-quote">
				<div className="hero-img" style={{ backgroundImage: "url(" + homeImage + ")" }}></div>
				<h3 className="quote">By shifting the ways in which we make meaning in the world around us, we shift our experience of the world.</h3>
			</div>
		</main>
	);
}