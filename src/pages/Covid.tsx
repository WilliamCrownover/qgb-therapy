import { PageContainer } from '../components/PageContainer';

export const Covid = () => {

	return (
		<PageContainer pageTitle='COVID-19'>
			<p style={{ textIndent: '40px' }}>With the widespread availability of COVID-19 vaccinations, I am offering exclusively in-person services for new patients.</p>
			<h4>The following precautions are being taken for in-office sessions</h4>
			<ul>
				<li>Patients experiencing symptoms of COVID-19, patients who have tested positive for COVID-19 in the past two weeks, and patients that have been in contact with another person who has tested positive for COVID-19 will be given the option to do telephone sessions until it is safe to resume in-person services.</li>
				<li>Prior to our first meeting, we will discuss your risk level, personal comfort, and other safety concerns before determining mask procedures during session.</li>
				<li>All surfaces are disinfected between patients.</li>
				<li>Hand sanitizer is available in the office space.</li>
				<li>As of December 2022, I am fully vaccinated for COVID-19 including a booster and encourage all who can access vaccinations to do so.</li>
			</ul>
		</PageContainer>
	);
}