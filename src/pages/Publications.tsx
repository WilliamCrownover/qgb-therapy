import { PageContainer } from '../components/PageContainer';

export const Publications = () => {

	return (
		<PageContainer pageTitle='Publications and Media'>
			<h4>Publications</h4>
			<p>
				<a href={'https://psycnet.apa.org/fulltext/2024-13773-001.html'} target={'_blank'} rel={'noopener noreferrer'}>Trans Identity Development and Integration (2023)</a>
			</p>
			<p>Peer reviewed article published in Psychoanalytic Psychology.</p>
			<br />
			<p style={{ textIndent: '40px' }}>This article explores popular modern theories of trans identity development and proposes a new conceptualization grounded in psychoanalytic and transgender theory. Building on Winnicott’s (1960) theories of the true and false self to understand trans identity development, this author proposes the concept of trans existential dread to understand the tension between the true and false self for trans folks. These concepts are presented alongside clinical recommendations for exploring gender with all patients.</p>
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