import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';

export default function Pages() {

	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/about' element={<About />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}