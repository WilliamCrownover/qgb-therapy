export const Footer = () => {

	return (
		<footer className='flex f-btw f-align-c'>
			<p className='copyright'>© 2021</p>

			<div className='flex f-align-c'>
				{/* Professional verification provided by Psychology Today */}
				<a
					href='https://www.psychologytoday.com/profile/906011'
					className='sx-verified-seal'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						className='verified-pic'
						src={`${process.env.PUBLIC_URL}/assets/pt.png`}
						alt='Verified Psychology Today'
					/>
				</a>
				<script
					type='text/javascript'
					src='https://member.psychologytoday.com/verified-seal.js'
					data-badge='14'
					data-id='906011'
					data-code='aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s='
				/>
			</div>

		</footer>
	);
}