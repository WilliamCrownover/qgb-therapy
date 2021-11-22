import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {

	const navData = [
		{
			id: 1,
			to: '/',
			name: 'Home'
		},
		{
			id: 2,
			to: '/about',
			name: 'About Dr. Bailey'
		},
		{
			id: 3,
			to: '/clinical-services',
			name: 'Clinical Services'
		},
		{
			id: 4,
			to: '/covid',
			name: 'COVID-19'
		},
		{
			id: 5,
			to: '/contact',
			name: 'Contact'
		},
		{
			id: 6,
			to: '/consultation',
			name: 'Trans Inclusive Clinic Consultation'
		}
	]

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
				{navData.map((page) => (
					<Link
						key={page.id}
						to={page.to}
						onClick={closeNav}
					>
						{page.name}
					</Link>
				))}
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