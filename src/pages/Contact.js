import Footer from "../components/Footer";

export default function Contact() {

	return (
		<>
			<div className='fullContainer'>
				<main className="pageContainer">
					<h3>Contact Dr. Bailey</h3>
					<p style={{ textIndent: '40px' }}>To schedule a free 30-minute consultation or to inquire about services, please contact me via phone, email, or the contact form below. I do my best to return messages within 24-hours.</p>
					<h4>Phone: 737-900-3680</h4>
					<h4>Email: qgbtherapy@gmail.com</h4>
					<div className="c-full">
						<iframe 
							title="contact" 
							src="https://docs.google.com/forms/d/e/1FAIpQLScWbI8ae5xurm8efv_e1kUoCoZd20gl_qKysSlaqIWAlr3r5A/viewform?embedded=true" 
							width="100%" 
							height="1765" 
							frameborder="0" 
							marginheight="0" 
							marginwidth="0"
						>
							Loading…
						</iframe>
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
}