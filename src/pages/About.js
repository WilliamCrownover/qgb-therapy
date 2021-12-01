import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {

	return (
		<>
			<Header />
			<div className="pageContainer">
				<h3>About Dr. Bailey</h3>
				<div className="flex f-align-top">
					<img className="profile-pic" src={`${process.env.PUBLIC_URL}/assets/qgb.jpg`} alt="Dr. Quintin Bailey" />
					<div>
						<p style={{ textIndent: '40px', paddingLeft: '30px' }}>I value authenticity and a continued commitment to self-reflection and personal growth. I am comforted to know that the only constant is change, that the act of just sitting and being with another person has profound meaning and potential for healing. I have experienced the power of being witnessed, by others and by myself, in my own personal journey with meditation and spirituality. It is with this mindful reflection that I approach everything I do. It is my hope that this authentic enthusiasm and curiosity can spark in others curiosity about themselves, how they have come to be, and where they would like to go.
						</p>
						<br/>
						<p style={{ textIndent: '40px', paddingLeft: '30px' }}>Dr. Bailey attended Mills College in Oakland, CA where he graduated with a B.A. in Psychology and Queer Studies. He then earned his PsyD in Clinical Psychology from the Wright Institute in Berkeley, CA. His undergraduate thesis proposed a theoretical extension of research on racism as a chronic stressor, and its subsequent impact on physical and psychological wellbeing, to understand transphobia as chronic stress. Dr. Bailey’s dissertation explored the importance of the therapeutic alliance and the treatment frame when working with patients experiencing psychosis. Throughout his training he specialized in providing individual and group psychodynamic psychotherapy to adults diagnosed with personality and dissociative disorders, with a particular interest in Borderline Personality Disorder and Dissociative Identity Disorder.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}