import Footer from "../components/Footer";

export default function Contact() {

	return (
		<main>
			<div className='fullContainer'>
				<div className="pageContainer">
					<h3>Contact Dr. Bailey</h3>
					<p style={{ textIndent: '40px' }}>To schedule a free 30-minute consultation or to inquire about services, please contact me via phone, email, or the contact form below. I do my best to return messages within 24-hours.
					</p>
					<h4>Phone: 737-900-3680</h4>
					{/* <img className="contact-img" src={`${process.env.PUBLIC_URL}/assets/phone.png`} alt="Dr. Quintin Bailey phone number" /> */}
					<h4>Email: qgbtherapy@gmail.com</h4>
					{/* <img className="contact-img" src={`${process.env.PUBLIC_URL}/assets/email.png`} alt="Dr. Quintin Bailey email" /> */}
					<div className="c-full">
						<iframe 
							title="contact" 
							src="https://docs.google.com/forms/d/e/1FAIpQLScWbI8ae5xurm8efv_e1kUoCoZd20gl_qKysSlaqIWAlr3r5A/viewform?embedded=true" 
							width="750" height="910" frameborder="0" marginheight="0" marginwidth="0"
							>
								Loading…
						</iframe>
					</div>
					<div className="c-840">
						<iframe 
							title="contact" 
							src="https://docs.google.com/forms/d/e/1FAIpQLScWbI8ae5xurm8efv_e1kUoCoZd20gl_qKysSlaqIWAlr3r5A/viewform?embedded=true" 
							width="670" height="910" frameborder="0" marginheight="0" marginwidth="0"
							>
								Loading…
						</iframe>
					</div>
					<div className="c-770">
						<iframe 
							title="contact" 
							src="https://docs.google.com/forms/d/e/1FAIpQLScWbI8ae5xurm8efv_e1kUoCoZd20gl_qKysSlaqIWAlr3r5A/viewform?embedded=true" 
							width="510" height="950" frameborder="0" marginheight="0" marginwidth="0"
							>
								Loading…
						</iframe>
					</div>
					<div className="c-500">
						<iframe 
							title="contact" 
							src="https://docs.google.com/forms/d/e/1FAIpQLScWbI8ae5xurm8efv_e1kUoCoZd20gl_qKysSlaqIWAlr3r5A/viewform?embedded=true" 
							width="410" height="980" frameborder="0" marginheight="0" marginwidth="0"
							>
								Loading…
						</iframe>
					</div>
					<div className="c-mobile">
						<iframe 
							title="contact" 
							id="mobile-form"
							src="https://docs.google.com/forms/d/e/1FAIpQLScWbI8ae5xurm8efv_e1kUoCoZd20gl_qKysSlaqIWAlr3r5A/viewform?embedded=true" 
							width="270" height="1160" frameborder="0" marginheight="0" marginwidth="0"
							>
								Loading…
						</iframe>
					</div>
				</div>
				<Footer />
			</div>
		</main>
	);
}