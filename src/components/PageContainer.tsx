import { Footer } from './Footer';

type Props = {
	pageTitle?: string,
	children: JSX.Element | JSX.Element[],
}

export const PageContainer = ({ pageTitle, children }: Props) => {

	return (
		<div className='fullContainer'>
			<main className='pageContainer'>
				{pageTitle && <h3>{pageTitle}</h3>}
				{children}
			</main>

			<Footer />
		</div>
	);
}