import { Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import AboutMe from './components/AboutMe/AboutMe';


function App() {

  useEffect(() => {
    window.localStorage.setItem('details', false)
  }, [])

	return (
		<section className='main-app-wrapper'>
			{window.innerHeight > 500 && window.innerWidth > 500 ? (
				<button className='secret-button'>secret button</button>
			) : null}

			<header className='header-wrapper'>
				<Link to='/'>
          <h1 className='header-header'>JAMES STOPPANI</h1>
        </Link>
			</header>
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
