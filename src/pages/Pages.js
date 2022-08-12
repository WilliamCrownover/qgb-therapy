import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from './Home';
import About from './About';
import Clinical from './Clinical';
import Covid from './Covid';
import Contact from './Contact';
import Consultation from './Consultation';

export default function Pages() {

	return (
		<>
			<Header />
			
			<Routes>
				<Route exact path='/about' element={<About />} />
				<Route exact path='/clinical-services' element={<Clinical />} />
				<Route exact path='/covid' element={<Covid />} />
				<Route exact path='/contact' element={<Contact />} />
				<Route exact path='/consultation' element={<Consultation />} />
				<Route path='/*' element={<Home />} />
			</Routes>
		</>
	);
}