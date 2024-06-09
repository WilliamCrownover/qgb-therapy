import { PageContainer } from '../components/PageContainer';
import { TabbedParagraph } from '../components/TabbedParagraph';

export const Contact = () => {

	return (
		<PageContainer pageTitle='Contact Dr. Bailey'>
			<TabbedParagraph content={'To schedule a free 30-minute consultation or for other questions and inquiries, please contact me via phone, email, or the contact form below. I do my best to return messages within 24 business hours.'}/>

			<h4>Information</h4>
			<h5>Phone: 737-900-3680</h5>
			<h5>Email: qgbtherapy@gmail.com</h5>

			<h4>Contact Form</h4>
			<div className='c-full'>
				<iframe
					title='contact'
					src='https://docs.google.com/forms/d/e/1FAIpQLScWbI8ae5xurm8efv_e1kUoCoZd20gl_qKysSlaqIWAlr3r5A/viewform?embedded=true'
					width='100%'
					height='1765'
				>
					Loading…
				</iframe>
			</div>
		</PageContainer>
	);
}