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
					<TabbedParagraph className='about-p' content={'I value authenticity and a continued commitment to self-reflection and personal growth. I am comforted to know that the only constant is change, that the act of just sitting and being with another person has profound meaning and potential for healing. I have experienced the power of being witnessed, by others and by myself, in my own personal journey with meditation and spirituality. It is with this mindful reflection that I approach everything I do. It is my hope that this authentic enthusiasm and curiosity can spark in others curiosity about themselves, how they have come to be, and where they would like to go.'}/>
					<br />
					<TabbedParagraph className='about-p' content={'Dr. Bailey attended Mills College in Oakland, CA where he graduated with a B.A. in Psychology and Queer Studies. He then earned his PsyD in Clinical Psychology from the Wright Institute in Berkeley, CA. His undergraduate thesis proposed a theoretical extension of research on racism as a chronic stressor, and its subsequent impact on physical and psychological wellbeing, to understand transphobia as chronic stress. Dr. Bailey’s dissertation explored the importance of the therapeutic alliance and the treatment frame when working with patients experiencing psychosis. Throughout his training he specialized in providing individual and group psychodynamic psychotherapy to adults diagnosed with personality and dissociative disorders, with a particular interest in Borderline Personality Disorder and Dissociative Identity Disorder.'}/>
					<br />
					<TabbedParagraph className='about-p' content={'In addition to his private practice, Dr. Bailey also serves as the Assistant Clinical Director for The Gronowski Center at Palo Alto University.'}/>
				</div>
			</div>
		</PageContainer>
	);
}