import { PageContainer } from '../components/PageContainer';
import { TabbedParagraph } from '../components/TabbedParagraph';

export const Consultation = () => {

	return (
		<PageContainer pageTitle='Trans Inclusive Clinic Consultation'>
			<TabbedParagraph content={'Providing ethical clinical care means providing trans inclusive services. From the moment of first contact with a clinic or provider to eventual treatment termination, every patient deserves to be seen and understood for their true self. I provide consultation services and trainings on trans inclusive clinical care. This includes reviewing paperwork, documentation, and other clinic practices and trainings on trans inclusive clinical interviews.'}/>
			<br />
			<TabbedParagraph content={'As an intern at The Pacific Center for Human Growth, the oldest LGBTQIA+ Center in the Bay Area, I worked closely with administrative staff to overhaul the phone screen and intake process for both efficiency and trans inclusion. This included developing language for clinicians to talk with patients about gender while acknowledging current limitations of documentation requirements within healthcare systems in order to prevent the burden of those limitations from being passed onto the patient.'}/>

			<h4>Offerings</h4>
			<h5>Trainings and Lectures </h5>
			<TabbedParagraph content={'The following trainings and lectures are available in-person or via zoom.'}/>
			<h5>The Shape of Gender </h5>
			<TabbedParagraph content={'This presentation invites clinicians to think critically about the concept of gender. Grounded in trans theory, integrated with narrative therapy techniques, it provides a framework to approach exploration of gender for all patients.'}/>
			<h5>Trans Inclusive Clinical Interviewing </h5>
			<TabbedParagraph content={'This training provides an overview of trans inclusive clinical interviewing and documentation. It highlights current limitations within healthcare systems and how to navigate those limitations within a treatment context.'}/>

			<h4>Additional Services</h4>
			<h5>Review of Documentation and Clinic Practices </h5>
			<TabbedParagraph content={'This service includes reviewing all paperwork, forms, and other documentation for trans inclusive language, as well as any other clinic services or practices you would like reviewed.'}/>
			<h5>Clinic Consultation </h5>
			<TabbedParagraph content={'The most extensive offering, this includes an assessment of current clinic practices and the recommended trainings based on that assessment. This package can be fully customized to the needs of the clinic or practice.'}/>
			
			<h4>Rates and Fees </h4>
			<TabbedParagraph content={'Rates and fees for trainings are determined by the length of training(s) and depth of review of clinic practices requested. The base rate is $250 per hour for trainings.'}/>
		</PageContainer>
	);
}