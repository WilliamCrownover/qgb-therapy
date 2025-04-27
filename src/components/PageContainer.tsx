import { Link } from 'react-router-dom';
import { Footer } from './Footer';

type Props = {
	pageTitle?: string,
	showContactButton?: boolean,
	children: JSX.Element | JSX.Element[],
}

export const PageContainer = ({ pageTitle, showContactButton = true, children }: Props) => {

	return (
		<div className='fullContainer'>
			<main className={`pageContainer ${showContactButton && 'show-contact-button'}`}>
				{showContactButton && <Link className='contact-quicklink' to={'/contact'}>Contact Dr. Bailey</Link>}
				{pageTitle && <h3>{pageTitle}</h3>}
				{children}
			</main>

			<Footer />
		</div>
	);
}