import Footer from "../components/Footer";

export default function GoodFaithEstimate() {

	return (
		<>
			<div className='fullContainer'>
				<main className="pageContainer">
					<h3>Good Faith Estimate</h3>
					<h4>STANDARD NOTICE</h4>
					<p>Right to Receive a Good Faith Estimate of Expected Charges Under the No Surprises Act. Under Section 2799B-6 of the Public Health Service Act, the "No Surprises Act," you have a right to receive a "good faith estimate" explaining how much your therapy services will cost. Healthcare providers are required to provide clients who do not have insurance or who choose not to use their insurance for therapy services with an estimate of the cost of those services.</p>
					<br />
					<ul>
						<li>You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.</li>
						<li>Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.</li>
						<li>If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.</li>
						<li>Make sure to save a copy or picture of your Good Faith Estimate.</li>
					</ul>
					<br />
					<p>For questions or more information about your right to a Good Faith Estimate, visit&nbsp;
						<span>
							<a href={'https://www.cms.gov/nosurprises'} target={"_blank"} rel={'noopener noreferrer'}>www.cms.gov/nosurprises</a>
						</span> or call HHS at 1-800-958-3059.
					</p>
				</main>

				<Footer />
			</div>
		</>
	);
}