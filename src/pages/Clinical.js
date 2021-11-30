import Header from "../components/Header";

export default function Clinical() {

	return (
		<>
			<Header />
			<div className="pageContainer">
				<h3>Clinical Services</h3>
				<h4>Individual Therapy</h4>
				<p style={{ textIndent: '40px' }}>I am currently offering in-person psychotherapy services for adults. My hours are 10am-7pm Tuesday-Thursday, and 10am-5pm on Fridays.
				</p>
				<h4>Group Therapy</h4>
				<h5>Beyond the Binary – Tuesdays 6pm-7:30pm</h5>
				<p style={{ textIndent: '40px' }}>This group is a supportive place for trans and non-binary folks to gain powerful experience connecting within community and is open to people in any place of their gender journey. The space is an interpersonal process and support group where members can explore themes important to them, engage in new ways of relating to others, and expand understanding of their emotional world.
				</p>
				<h4>Approach</h4>
				<p style={{ textIndent: '40px' }}>My primary theoretical orientation is psychodynamic, which means I believe in the unconscious and in the importance of being curious about the unique universe of every patient. Having worked primarily with folks with personality and dissociative disorders, I have great empathy for the suffering from which these styles of relating to the world developed to survive. Every treatment serves as a reminder to me that it is a privilege to sit with another and to witness their process of transformation. By connecting with their values and becoming grounded in the present I have seen folks from a variety of diverse backgrounds and identity intersections increase their capacity to feel, understand, and integrate a range of emotional experiences and become curious about themselves and others.
				</p>
				<br />
				<p style={{ textIndent: '40px' }}>This includes being curious about the therapeutic relationship we will build together. Feeling you can bring your full self(s) into the therapy room is of utmost importance. This means feeling seen and understood in the often uncomfortable or challenging process of change. I offer a free 30-minute consultation to collaboratively decide if we are a good match.
				</p>
				<h4>Experience</h4>
				<p style={{ textIndent: '40px' }}>During grad school, Dr. Bailey worked at Portia Bell Hume in the partial hospitalization program providing interpersonal process groups to adults with chronic mental health struggles and systemic stressors. As well, he provided long-term outpatient therapy to individuals with personality and dissociative disorders through the Pacific Center for Human Growth, the oldest LGBTQIA+ center in the Bay Area. Dr. Bailey completed his predoctoral internship at The University of Texas at Austin Counseling and Mental Health Center where he specialized in working within the transgender and gender non-conforming community and those experiencing multiplicity or plurality. He is excited about his post-doctoral fellowship supervised by Krista Jordan, PhD.
				</p>
				<h5>Specializations </h5>
				<div className="flex f-arnd">
					<ul>
						<li>Personality Disorders</li>
						<li>Dissociative Disorders</li>
						<li>Borderline Personality Disorder</li>
						<li>Multiplicity and Plurality</li>
						<li>Relationship Issues</li>
					</ul>
					<ul>
						<li>Eating Disorders</li>
						<li>Identity Development and Integration</li>
						<li>Life Transitions</li>
						<li>Grief</li>
						<li>Childhood Trauma </li>
					</ul>
				</div>
				<h5>Fees </h5>
				<p style={{ textIndent: '40px' }}>Individual therapy sessions are sliding scale $150-$175 per 50-minute hour. Group therapy sessions are $50 per 90-minute hour. I am an out of network provider. 
				</p>
			</div>
		</>
	);
}