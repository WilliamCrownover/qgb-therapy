import { PageContainer } from '../components/PageContainer';
import { TabbedParagraph } from '../components/TabbedParagraph';

export const About = () => {

	return (
		<PageContainer pageTitle={'Meet Dr. Bailey'}>
			<div className='flex flex-wrap-mobile f-align-top'>
				<img
					className='profile-pic'
					src={`${import.meta.env.BASE_URL}assets/qgb.jpg`}
					alt='Dr. Quintin Bailey'
				/>
				<img
					className='profile-pic profile-pic-small'
					src={`${import.meta.env.BASE_URL}assets/qgb-s.jpg`}
					alt='Dr. Quintin Bailey'
				/>
				<div className='break-2'></div>
				<div className='about-text-container'>
					<p className='about-p'>(Pronouns: He/They)</p>
					<br />
					<TabbedParagraph className='about-p' content={'I believe that deep, meaningful healing begins with a genuine, collaborative connection. Therapy should be a safe, attuned space where you don’t have to mask or filter yourself to support a process where you can explore your inner world, untangle old relational patterns, and find a renewed sense of clarity and self-compassion.'} />
					<h4 style={{ paddingLeft: '30px' }}>My Clinical Approach</h4>
					<TabbedParagraph className='about-p' content={"I take a relational and psychodynamic approach to therapy. That means we don't just look at what's happening on the surface; we gently explore the deeper roots of how you experience yourself, navigate relationships, and carry your past."} />
					<br />
					<TabbedParagraph className='about-p' content={"My practice focuses on providing culturally humble, affirming care, with specialized expertise in supporting adults navigating:"} />
					<br />
					<ul>
						<li>Interpersonal and developmental trauma, and the lingering impacts of painful past experiences</li>
						<li>Complex emotional patterns, heavy life transitions, and a fragmented sense of self</li>
						<li>Identity development, including dedicated support for trans and LGBTQIA+ individuals</li>
					</ul>
				</div>
			</div>
			<div className='flex flex-wrap'>
			</div>
			<h4>Credentials & Background</h4>
			<div className='flex flex-wrap'>
				<TabbedParagraph content={"I am a licensed clinical psychologist in California, Michigan, and Texas, and I am board-certified in Psychoanalytic and Psychodynamic Psychology by the American Board of Professional Psychology (ABPP)."} />
				<br />
				<TabbedParagraph content={"Beyond standard graduate training, I have pursued advanced post-graduate studies, including a specialized certificate in Complex Trauma and Dissociation from the International Society for the Study of Trauma and Dissociation (ISSTD), alongside focused training in Jungian psychotherapy and trauma-informed attachment."} />
				<br />
				<TabbedParagraph content={"In addition to my clinical work, I am deeply engaged in scholarly writing, advocacy, and education centered on psychoanalytic theory, trans identity, and making mental health systems more equitable and inclusive."} />
			</div>
		</PageContainer>
	);
}