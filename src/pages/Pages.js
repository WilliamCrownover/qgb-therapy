import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Clinical from './Clinical';
import Covid from './Covid';
import Contact from './Contact';

export default function Pages() {

	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/about' element={<About />} />
					<Route exact path='/clinical-services' element={<Clinical />} />
					<Route exact path='/covid' element={<Covid />} />
					<Route exact path='/contact' element={<Contact />} />
					<Route path='*' element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}