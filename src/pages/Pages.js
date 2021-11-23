import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Clinical from './Clinical';
import Covid from './Covid';
import Contact from './Contact';
import Consultation from './Consultation';

export default function Pages() {

	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/qgb-therapy/about' element={<About />} />
					<Route exact path='/qgb-therapy/clinical-services' element={<Clinical />} />
					<Route exact path='/qgb-therapy/covid' element={<Covid />} />
					<Route exact path='/qgb-therapy/contact' element={<Contact />} />
					<Route exact path='/qgb-therapy/consultation' element={<Consultation />} />
					<Route path='*' element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}