import Header from "../components/Header";

export default function Clinical() {

	return (
		<>
			<Header />
			<div className="pageContainer">
				<h3>Clinical Services</h3>
				<h4>Individual Therapy</h4>
				<p style={{ textIndent: '40px' }}>I am currently offering in-person individual psychotherapy services for adults. My hours are 2pm-8pm Monday-Thursday, and 10am-5pm on Fridays.
				</p>
				<h4>Approach</h4>
				<p style={{ textIndent: '40px' }}>My primary theoretical orientation is psychodynamic, which means I believe in the unconscious and in the importance of being curious about the unique universe of every patient. Having worked primarily with individuals with personality disorders, I have great empathy for the suffering from which these styles of relating to the world developed to survive. Every treatment serves as a reminder to me that it is a privilege to sit with another person and to witness their process of transformation. By connecting with their values and becoming grounded in the present I have seen individuals from a variety of diverse backgrounds and identity intersections increase their capacity to feel, understand, and integrate a range of emotional experiences and become curious about themselves and others.
				</p>
				<br />
				<p style={{ textIndent: '40px' }}>This includes being curious about the therapeutic relationship we will build together. Feeling you can bring your full self into the therapy room is of utmost importance. This means feeling seen and understood in the often uncomfortable or challenging process of change. I offer a free 30-minute consultation to help you identify the right therapist for you.
				</p>
				<h4>Experience</h4>
				<p style={{ textIndent: '40px' }}>During grad school, Dr. Bailey worked at Portia Bell Hume in the partial hospitalization program providing interpersonal process groups to adults with chronic mental health struggles and systemic stressors. As well, he provided long-term outpatient therapy to individuals with personality disorders through the Pacific Center for Human Growth, the oldest LGBTQIA+ center in the Bay Area. Dr. Bailey completed his predoctoral internship at The University of Texas at Austin Counseling and Mental Health Center where he specialized in working within the transgender and gender non-conforming community. He is excited about his post-doctoral fellowship supervised by Dr. Krista Jordan, PhD.
				</p>
				<h5>Specializations </h5>
				<div className="flex f-arnd">
					<ul>
						<li>Personality Disorders</li>
						<li>Borderline Personality Disorder</li>
						<li>Relationship Issues</li>
						<li>Eating Disorders</li>
					</ul>
					<ul>
						<li>Identity Development and Integration</li>
						<li>Life Transitions</li>
						<li>Grief</li>
						<li>Childhood Trauma </li>
					</ul>
				</div>
				<h5>Fees </h5>
				<p style={{ textIndent: '40px' }}>Individual therapy sessions are $150 per 50-minute hour. I am an out of network provider. 
				</p>
			</div>
		</>
	);
}