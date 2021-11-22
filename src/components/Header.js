import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {

	const [navOpen, setNavOpen] = useState(false);

	const openNav = () => {
		setNavOpen(true);
	}

	const closeNav = () => {
		setNavOpen(false);
	}

	return (
		<>

			<div className={`sidenav ${navOpen ? "open" : "closed"}`}>
				<div href="#" className="closebtn" onClick={closeNav}>&times;</div>
				<Link
					to="/about"
				>
					About Dr. Bailey
				</Link>
			</div>
			<header className="flex f-arnd f-align-c">
				<div><span onClick={openNav}>O</span></div>
				<h1>QGB Therapy</h1>
				<div>
					<h2>Psychotherapy services by Dr. Quintin Bailey, PsyD</h2>
					<h2>Supervised by Dr. Krista Jordan, PhD, ABPP</h2>
				</div>
			</header>
		</>
	);
}