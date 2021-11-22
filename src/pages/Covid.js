import Header from "../components/Header";

export default function Covid() {

	return (
		<>
			<Header />
			<div className="pageContainer">
				<h3>COVID-19</h3>
				<p style={{ textIndent: '40px' }}>With the widespread availability of COVID-19 vaccinations, I am offering exclusively in-person services for new patients.
				</p>
				<h5>The following precautions are being taken for in-office sessions:</h5>
					<ul>
						<li>Patients experiencing symptoms of COVID-19, patients who have tested positive for COVID-19 in the past two weeks, and patients that have been in contact with another person who has tested positive for COVID-19 will be given the option to do telephone sessions until it is safe to resume in-person services.</li>
						<li>Masks are required in the communal spaces (e.g., lobby and hallways). Prior to our first meeting, we will discuss your risk level, personal comfort, and other safety concerns before determining mask procedures during session.</li>
						<li>All surfaces are disinfected between patients.</li>
						<li>Hand sanitizer is available in the office space.</li>
						<li>As of March 2021, I am fully vaccinated for COVID-19 and encourage all who can access vaccinations to do so.</li>
					</ul>
			</div>
		</>
	);
}