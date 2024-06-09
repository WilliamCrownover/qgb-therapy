import { Routes, Route } from 'react-router-dom';

import { Header } from '../components/Header';
import { Home } from './Home';
import { About } from './About';
import { Clinical } from './Clinical';
import { GoodFaithEstimate } from './GoodFaithEstimate';
import { Contact } from './Contact';
import { Publications } from './Publications';
import { Consultation } from './Consultation';
import { Meditations } from './Meditations';

export const Pages = () => {

	return (
		<>
			<Header />
			
			<Routes>
				<Route path='/about' element={<About />} />
				<Route path='/clinical-services' element={<Clinical />} />
				<Route path='/good-faith-estimate' element={<GoodFaithEstimate />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/publications' element={<Publications />} />
				<Route path='/consultation' element={<Consultation />} />
				<Route path='/meditations' element={<Meditations />} />
				<Route path='/*' element={<Home />} />
			</Routes>
		</>
	);
}