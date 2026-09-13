import { PageContainer } from '../components/PageContainer';
import { Link } from 'react-router-dom';
import { TabbedParagraph } from '../components/TabbedParagraph';

export const Clinical = () => {

	return (
		<PageContainer pageTitle='Clinical Services'>
			<h4>Individual Therapy</h4>
			<TabbedParagraph content={'Healing from relational trauma does not mean erasing your past; it means reclaiming a feeling of safety, agency, and self-trust in the present. I work with adults navigating identity, attachment wounds, self-exploration, and the lingering effects of early relational patterns on their emotional life, relationships, and sense of self.'}/>

			<h4>Approach</h4>
			<TabbedParagraph content={'My work is grounded in psychodynamic and relational psychotherapy, with a trauma-informed lens that honors how early experiences, attachment disruptions, and systems of oppression can shape how we understand ourselves and relate to others. I am especially interested in the ways relational trauma, shame, and survival strategies can affect emotional regulation, boundaries, identity, and the ability to feel safe and fully known. Together, we can explore the stories, patterns, and meanings that have shaped you, while creating space for greater self-understanding, compassion, and agency.'}/>
			<br />
			<TabbedParagraph content={'The therapeutic relationship itself is an important part of the work. I aim to create a space where you can bring your full self—your questions, grief, complexity, and curiosity—without having to hide parts of who you are. Therapy can be a place to slow down, make sense of your lived experience, and move toward greater clarity, connection, and authenticity. I offer a complimentary 30-minute consultation to discuss your needs and determine whether we are a good fit.'}/>

			<h4>Experience</h4>
			<TabbedParagraph content={'I have worked across outpatient, partial hospitalization, and university counseling settings, supporting adults navigating relational trauma, identity development, life transitions, and chronic emotional distress. My clinical experience includes interpersonal process groups, long-term psychotherapy, and work with LGBTQIA+ clients, transgender and gender non-conforming individuals, and adults seeking deeper understanding of how early relationships and cultural narratives shape their current experiences. I completed my predoctoral internship at The University of Texas at Austin Counseling and Mental Health Center and a postdoctoral fellowship supervised by Krista Jordan, PhD.'}/>
			<h5>Specializations </h5>
			<div className='flex flex-wrap f-arnd'>
				<ul>
					<li>Personality Disorders</li>
					<li>Borderline Personality Disorder</li>
					<li>Relational Trauma</li>
					<li>Attachment Wounds</li>
					<li>Identity Development & Integration</li>
					<li>Self-Exploration & Meaning-Making</li>
				</ul>
				<div className='break-2'></div>
				<ul>
					<li>Relationship Issues</li>
					<li>Gender & Sexual Identity</li>
					<li>Life Transitions</li>
					<li>Grief & Loss</li>
					<li>Religious Trauma</li>
					<li>LGBTQIA+ Affirming Care</li>
				</ul>
			</div>
			
			<h4>Fees </h4>
			<TabbedParagraph content={'Individual sessions are $250 per 50-minute session. I am an out-of-network provider. Please inquire about insurance and reimbursement options, and I am happy to discuss what may work best for you.'}/>
			<br />
			<Link to={'/good-faith-estimate'}>No Surprise Act: Good Faith Estimate</Link>
		</PageContainer>
	);
}