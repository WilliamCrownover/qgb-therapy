import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {

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
			to: '/contact',
			name: 'Contact'
		},
		{
			id: 5,
			to: '/meditations',
			name: 'Meditations'
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

	const keyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			setNavOpen(!navOpen);
			(e.target as HTMLElement).blur();
		}
	}

	return (
		<>
			<header className='flex flex-wrap f-btw f-align-c'>
				<div
					role='button'
					title='Open nav menu'
					className='navIcon'
					onClick={openNav}
					onKeyDown={keyPress}
					tabIndex={navOpen ? (-1) : 0}
				>
					<FontAwesomeIcon icon={faBars} size='2x' />
				</div>

				<h1>QGB Therapy LLC</h1>
				<div className='break'></div>
				<div className='header-subtext'>
					<h2>Psychotherapy and Assessment by Quintin Bailey, PsyD</h2>
					<h2>Clinical Psychologist <code>&#8211;</code> TX License #39158 <code>&#8211;</code> CA License #34961</h2>
				</div>
			</header>

			<nav className={`sidenav ${navOpen ? 'open' : 'closed'}`}>
				<div
					role='button'
					title='Close nav menu'
					className='closebtn'
					onClick={closeNav}
					onKeyDown={keyPress}
					tabIndex={!navOpen ? (-1) : 0}
				>
					&times;
				</div>
				{navData.map((page) => (
					<Link
						key={page.id}
						to={page.to}
						onClick={closeNav}
						tabIndex={!navOpen ? (-1) : 0}
					>
						{page.name}
					</Link>
				))}
			</nav>
		</>
	);
}