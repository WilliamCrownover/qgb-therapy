import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {

	const navData = [
		{
			id: 1,
			to: '/qgb-therapy',
			name: 'Home'
		},
		{
			id: 2,
			to: '/qgb-therapy/about',
			name: 'About Dr. Bailey'
		},
		{
			id: 3,
			to: '/qgb-therapy/clinical-services',
			name: 'Clinical Services'
		},
		{
			id: 4,
			to: '/qgb-therapy/covid',
			name: 'COVID-19'
		},
		{
			id: 5,
			to: '/qgb-therapy/contact',
			name: 'Contact'
		},
		{
			id: 6,
			to: '/qgb-therapy/consultation',
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
			<header className="flex f-btw f-align-c">
				<div><span className="navIcon" onClick={openNav}><FontAwesomeIcon icon={faBars} size="2x" /></span></div>
				<h1>QGB Therapy</h1>
				<div>
					<h2>Psychotherapy services by Dr. Quintin Bailey, PsyD</h2>
					<h2>Supervised by Dr. Krista Jordan, PhD, ABPP</h2>
				</div>
			</header>
		</>
	);
}