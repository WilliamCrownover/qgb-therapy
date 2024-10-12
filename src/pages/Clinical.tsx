import { PageContainer } from '../components/PageContainer';
import { Link } from 'react-router-dom';
import { TabbedParagraph } from '../components/TabbedParagraph';

export const Clinical = () => {

	return (
		<PageContainer pageTitle='Clinical Services'>
			<h4>Individual Therapy</h4>
			<TabbedParagraph content={'QGB Therapy LLC currently offers telehealth psychotherapy services for adults throughout California.'}/>

			<h4>Approach</h4>
			<TabbedParagraph content={'My primary theoretical orientation is psychodynamic, which means I believe in the unconscious and in the importance of being curious about the unique universe of every patient. Having worked primarily with folks with personality and dissociative disorders, I have great empathy for the suffering from which these styles of relating to the world developed to survive. Every treatment serves as a reminder to me that it is a privilege to sit with another and to witness their process of transformation. By connecting with their values and becoming grounded in the present I have seen folks from a variety of diverse backgrounds and identity intersections increase their capacity to feel, understand, and integrate a range of emotional experiences and become curious about themselves and others.'}/>
			<br />
			<TabbedParagraph content={'This includes being curious about the therapeutic relationship we will build together. Feeling you can bring your full self(s) into the therapy room is of utmost importance. This means feeling seen and understood in the often uncomfortable or challenging process of change. I offer a free 30-minute consultation to collaboratively decide if we are a good match.'}/>

			<h4>Experience</h4>
			<TabbedParagraph content={'During grad school, Dr. Bailey worked at Portia Bell Hume in the partial hospitalization program providing interpersonal process groups to adults with chronic mental health struggles and systemic stressors. As well, they provided long-term outpatient therapy to individuals with personality and dissociative disorders through the Pacific Center for Human Growth, the oldest LGBTQIA+ center in the Bay Area. Dr. Bailey completed their predoctoral internship at The University of Texas at Austin Counseling and Mental Health Center where they specialized in working within the transgender and gender non-conforming community and those experiencing multiplicity or plurality. They then completed a post-doctoral fellowship supervised by Krista Jordan, PhD.'}/>
			<h5>Specializations </h5>
			<div className='flex flex-wrap f-arnd'>
				<ul>
					<li>Personality Disorders</li>
					<li>Dissociative Disorders</li>
					<li>Borderline Personality Disorder</li>
					<li>Multiplicity and Plurality</li>
					<li>Relationship Issues</li>
					<li>Religious Trauma</li>
				</ul>
				<div className='break-2'></div>
				<ul>
					<li>Eating Disorders</li>
					<li>Identity Development and Integration</li>
					<li>Life Transitions</li>
					<li>Grief</li>
					<li>Childhood Trauma</li>
					<li>Differential Diagnosis Assessments</li>
				</ul>
			</div>
			
			<h4>Fees </h4>
			<TabbedParagraph content={'Psychotherapy sessions are $200 per 50-minute hour. Assessments are $250 per 50-minute hour. I am an out of network provider. Sliding scale is available for BIPOC and Trans folks.'}/>
			<br />
			<Link to={'/good-faith-estimate'}>No Surprise Act: Good Faith Estimate</Link>
		</PageContainer>
	);
}