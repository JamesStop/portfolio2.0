
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
	
	return (
		<section className='main-app-wrapper'>
			<header className='header-wrapper'>jstoppani</header>
			<main className='main-wrapper'>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/about' element={<AboutMe />} />
				</Routes>
			</main>
		</section>
	);
}

export default App;
