import { PageContainer } from '../components/PageContainer';
import { TabbedParagraph } from '../components/TabbedParagraph';

export const Publications = () => {

	return (
		<PageContainer pageTitle='Publications and Media'>
			<h4>Publications</h4>
			<p>
				<a href={'https://www.tandfonline.com/doi/full/10.1080/15240657.2025.2503590'} target={'_blank'} rel={'noopener noreferrer'}>Un(be)coming (2025)</a>
			</p>
			<p>Peer reviewed article published in Studies in Gender and Sexuality.</p>
			<br />
			<TabbedParagraph content={'This article explores various ways that dominant discourse around identity disclosure and use of self are enacted in the supervision of graduate students. More explicitly, the author explores their own process of clinical disciplining over the course of graduate school through a tapestry of transpoetics and object relations theory. This exploration is presented through extended metaphor to underscore the ways Westernized, white, heterosexual, cisgender, able-bodied identities continue to be unconsciously used as the baseline by which clinicians with different identities are measured and interpreted by those with evaluative power. For many trans clinicians in particular, the ability to pass graduate school hinges on our ability to pass as non-trans. Through the policing of trans existence in psychoanalysis, trans clinicians experience violence and colonization with regards to their mind and bodies, and by extension the minds and bodies of their patients. This is a call from within the institution to trans the cis-tem of psychoanalysis through a radical transformation of the supervision space.'}/>
			
			<br/>

			<p>
				<a href={'https://psycnet.apa.org/fulltext/2024-13773-001.html'} target={'_blank'} rel={'noopener noreferrer'}>Trans Identity Development and Integration (2024)</a>
			</p>
			<p>Peer reviewed article published in Psychoanalytic Psychology.</p>
			<br />
			<TabbedParagraph content={'This article explores popular modern theories of trans identity development and proposes a new conceptualization grounded in psychoanalytic and transgender theory. Building on Winnicott’s (1960) theories of the true and false self to understand trans identity development, this author proposes the concept of trans existential dread to understand the tension between the true and false self for trans folks. These concepts are presented alongside clinical recommendations for exploring gender with all patients.'}/>

			<h4>Media</h4>
			<p>
				<a href={'https://www.wondermind.com/article/avoidant-personality-disorder/'} target={'_blank'} rel={'noopener noreferrer'}>Do I Have Avoidant Personality Disorder or Am I Just Shy?</a>
			</p>
			<p>Article by Sam Brodsky for &nbsp;
				<a href={'https://www.wondermind.com/'} target={'_blank'} rel={'noopener noreferrer'}>Wondermind.com</a>
			</p>
		</PageContainer>
	);
}