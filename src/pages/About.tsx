import { PageContainer } from '../components/PageContainer';
import { TabbedParagraph } from '../components/TabbedParagraph';

export const About = () => {

	return (
		<PageContainer pageTitle={'About Dr. Bailey'}>
			<div className='flex flex-wrap-mobile f-align-top'>
				<img
					className='profile-pic'
					src={`${process.env.PUBLIC_URL}/assets/qgb.jpg`}
					alt='Dr. Quintin Bailey'
				/>
				<img
					className='profile-pic profile-pic-small'
					src={`${process.env.PUBLIC_URL}/assets/qgb-s.jpg`}
					alt='Dr. Quintin Bailey'
				/>
				<div className='break-2'></div>
				<div className='about-text-container'>
					<TabbedParagraph className='about-p' content={'I value authenticity and a continued commitment to self-reflection and personal growth. I am comforted to know that the only constant is change, that the act of just sitting and being with another person has profound meaning and potential for healing. I have experienced the power of being witnessed, by others and by myself, in my own personal journey with meditation and spirituality. It is with this mindful reflection that I approach everything I do. It is my hope that this authentic enthusiasm and curiosity can spark in others curiosity about themselves, how they have come to be, and where they would like to go.'} />
					<br />
					<TabbedParagraph className='about-p' content={'Dr. Bailey attended Mills College in Oakland, CA where they graduated with a B.A. in Psychology and Queer Studies. They then earned their PsyD in Clinical Psychology from the Wright Institute in Berkeley, CA. Their undergraduate thesis proposed a theoretical extension of research on racism as a chronic stressor, and its subsequent impact on physical and psychological wellbeing, to understand transphobia as chronic stress. Dr. Bailey’s dissertation explored the importance of the therapeutic alliance and the treatment frame when working with patients experiencing psychosis. Throughout their training they specialized in providing individual and group psychodynamic psychotherapy to adults diagnosed with personality and dissociative disorders, with a particular interest in Borderline Personality Disorder and Dissociative Identity Disorder.'} />
					<br />
					<TabbedParagraph className='about-p' content={'In addition to their private practice, Dr. Bailey also serves as the Assistant Clinical Director for The Mountain View Clinics @ PAU.'} />
				</div>
			</div>
			<h4>Additional Certifications</h4>
			<div className='flex flex-wrap'>
				<ul>
					<li>Advanced Certificate in Complex Trauma and Dissociation (completed 2025, The
						International Society for the Study of Trauma and Dissociation)</li>
					<li>Trauma and Attachment Certificate (complete 2024, The Zur Institute)</li>
					<li>Certificate Program in Jungian Psychotherapy (completed 2024, The Zur Institute)</li>
					<li>Certificate of Advanced Psychoanalytic Psychotherapy (completed 2024, The Institute for Advanced Psychological Studies)</li>
				</ul>
			</div>
			<h4>Professional Organizations</h4>
			<div className='flex flex-wrap'>
				<ul>
					<li>
						<a href={'https://www.apa.org/'} target={'_blank'} rel={'noopener noreferrer'}>American Psychological Association</a> (Member)
					</li>
					<li>
						<a href={'https://www.isst-d.org/'} target={'_blank'} rel={'noopener noreferrer'}>International Society for the Study of Trauma and Dissociation</a> (Member)
					</li>
					<li>
						<a href={'https://nasspd.org/'} target={'_blank'} rel={'noopener noreferrer'}>North American Society for the Study of Personality Disorders</a> (Member)
					</li>
					<li>
						<a href={'https://www.genderyouthproviders.com/'} target={'_blank'} rel={'noopener noreferrer'}>Mind the Gap</a> (Member)
					</li>
					<li>
						<a href={'https://www.aptc.org/'} target={'_blank'} rel={'noopener noreferrer'}>Association of Psychology Training Clinics</a> (Associate Member)
					</li>
				</ul>
			</div>
		</PageContainer>
	);
}