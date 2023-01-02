import { Routes, Route } from 'react-router-dom';

import { Header } from '../components/Header';
import { Home } from './Home';
import { About } from './About';
import { Clinical } from './Clinical';
import { GoodFaithEstimate } from './GoodFaithEstimate';
import { Covid } from './Covid';
import { Contact } from './Contact';
import { Consultation } from './Consultation';

export const Pages = () => {

	return (
		<>
			<Header />
			
			<Routes>
				<Route path='/about' element={<About />} />
				<Route path='/clinical-services' element={<Clinical />} />
				<Route path='/good-faith-estimate' element={<GoodFaithEstimate />} />
				<Route path='/covid' element={<Covid />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/consultation' element={<Consultation />} />
				<Route path='/*' element={<Home />} />
			</Routes>
		</>
	);
}