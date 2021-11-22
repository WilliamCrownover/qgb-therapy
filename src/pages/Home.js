import Header from "../components/Header";

export default function Home() {

	return (
		<>
			<Header />
			<div className="container-img-quote">
				<div className="hero-img" style={{ backgroundImage: "url(/assets/qgb-home.jpg)"}}></div>
				<h3 className="quote">By shifting the ways in which we make meaning in the world around us, we shift our experience of the world.</h3>
			</div>
		</>
	);
}