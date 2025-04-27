import { Routes, Route } from 'react-router-dom';

import { Header } from '../components/Header';
import { Home } from './Home';
import { About } from './About';
// import { PostdoctoralAssociates } from './PostdoctoralAssociates';
import { Clinical } from './Clinical';
import { GoodFaithEstimate } from './GoodFaithEstimate';
import { Contact } from './Contact';
// import { PostdoctoralTraining } from './PostdoctoralTraining';
import { Consultation } from './Consultation';
import { Publications } from './Publications';
import { Meditations } from './Meditations';

export const Pages = () => {

	return (
		<>
			<Header />
			
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/about' element={<About />} />
				{/* <Route path='/associates' element={<PostdoctoralAssociates />} /> */}
				<Route path='/clinical-services' element={<Clinical />} />
				<Route path='/good-faith-estimate' element={<GoodFaithEstimate />} />
				<Route path='/contact' element={<Contact />} />
				{/* <Route path='/postdoctoral-training' element={<PostdoctoralTraining />} /> */}
				<Route path='/consultation' element={<Consultation />} />
				<Route path='/publications' element={<Publications />} />
				<Route path='/meditations' element={<Meditations />} />
			</Routes>
		</>
	);
}