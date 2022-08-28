import React from 'react';
import './ClearStorage.css'
import { useNavigate } from 'react-router-dom';

function ClearStorage(props) {
	
	const navigate = useNavigate()

    const clearStorage = () => {
        window.localStorage.removeItem('details')
        window.localStorage.removeItem('about');
        window.localStorage.removeItem('projects');
        window.localStorage.removeItem('experience');
        window.localStorage.removeItem('contact');
		navigate('/')
    }

    return (
			<div className='clear-storage-wrapper'>
				<p className='clear-storage-text'>
					This site uses your local storage to keep track of which pages you
					have visited and update the navigation page with extra graphics based
					on those visited sites. If you're reading this that means you've
					visited every page and have accumulated every point of local storage
					possible from this site. By clicking the button below you will be
					removing that data from your local storage and essentially making it
					like you'd never visited the site to begin with. This change to local
					storage only affects this site.
				</p>
				<button className='clear-storage-button' onClick={clearStorage}>
					Confirm Clear
				</button>
			</div>
		);
}

export default ClearStorage;