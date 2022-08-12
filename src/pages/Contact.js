import Footer from "../components/Footer";

export default function Contact() {

	return (
		<>
			<div className='fullContainer'>
				<main className="pageContainer">
					<h3>Contact Dr. Bailey</h3>
					<p style={{ textIndent: '40px' }}>To schedule a free 30-minute consultation or to inquire about services, please contact me via phone, email, or the contact form below. I do my best to return messages within 24-hours.</p>
					
					<h4>Information</h4>
					<h5>Phone: 737-900-3680</h5>
					<h5>Email: qgbtherapy@gmail.com</h5>
					
					<h4>Location</h4>
					<div className="map flex">
						<iframe 
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.2737716191655!2d-97.74426588455816!3d30.371582981764597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cbbc7bdefa25%3A0x22834ab77555c338!2sQGB%20Therapy%20LLC!5e0!3m2!1sen!2sus!4v1660281566056!5m2!1sen!2sus" 
							width="100%" 
							height="450" 
							style={{border:0}} 
							allowfullscreen="" 
							loading="lazy" 
							referrerpolicy="no-referrer-when-downgrade"
							title="Map"
						/>
					</div>
					
					<h4>Contact Form</h4>
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