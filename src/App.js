import './App.css';
import data from './data';
import { useState } from 'react';

function App() {
	const artists = Object.keys(data);

	const [artistSelected, setArtistSelected] = useState('Selena Gomez');

	const handleArtistClick = (artist) => {
		setArtistSelected(artist);
	};

	return (
		<main>
			<h1>Music Recommender</h1>

			<p>
				Here are my favourite Artists. Select an artist to see their
				best songs.
			</p>

			<nav>
				<ul className='list-artist'>
					{artists.map((artist, index) => {
						console.log(artist);
						return (
							<li
								key={index}
								onClick={() => handleArtistClick(artist)}>
								{artist}
							</li>
						);
					})}
				</ul>
				{artistSelected in data ? (
					<div className='suggestions-box'>
						{data[artistSelected].map((music, index) => {
							return (
								<div key={index}>
									<h2>
										<span>Name: </span>
										{music.title}
									</h2>
									<p>
										<span>Artists: </span> {music.singers}
									</p>
								</div>
							);
						})}
					</div>
				) : (
					<></>
				)}
			</nav>
		</main>
	);
}

export default App;
