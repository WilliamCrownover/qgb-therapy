import Footer from "../components/Footer";

export default function Contact() {

	return (
		<>
			<div className='fullContainer'>
				<div className="pageContainer">
					<h3>Contact Dr. Bailey</h3>
					<p style={{ textIndent: '40px' }}>To schedule a free 30-minute consultation or to inquire about services, please contact me via phone or email. I do my best to return messages within 24-hours.
					</p>
					<img className="contact-img" src={`${process.env.PUBLIC_URL}/assets/phone.png`} alt="Dr. Quintin Bailey phone number" />
					<img className="contact-img" src={`${process.env.PUBLIC_URL}/assets/email.png`} alt="Dr. Quintin Bailey email" />
				</div>
				<Footer />
			</div>
		</>
	);
}