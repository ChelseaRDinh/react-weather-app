import React, { useState } from 'react';

const api = {
	key: '8441299d786f42839c775fe9179d963a',
	url: 'https://api.openweathermap.org/data/2.5/'
};

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // Function to ping API (GET request) from user query
  const search = evt => {
	if (evt.key === 'Enter') {
		// Get weather from API with fetch
		fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
			// Get JSON promise from API response
			.then(response => response.json())
			// Pass JSON promise to another promise
			.then(result => {
				setWeather(result);
				//Reset query field after search submission
				setQuery('');
				console.log(result);
		});
	}
  }

  // Function build date into string format
  const dateBuilder = (d) => {
	let months = ['January', 'February', 'March', 'April', 
				'May', 'June', 'July', 'August', 'September',
				'October', 'December'];

	let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();

	return `${day} ${date} ${month} ${year}`;
  };
	
  return (
    <div className="app">
		<main>
			<div className="search-box">
				<input 
					type="text" 
					className="search-bar" 
					placeholder="Search..."
					onChange={e => setQuery(e.target.value)}
					value={query}
					onKeyPress={search}
				/>
			</div>
			{(typeof weather.main != 'undefined') ? (
			<div className="weather-info">
				<div className="location-box">
					<div className="location">
						{weather.name}, {weather.sys.country}
					</div>
					<div className="date">{dateBuilder(new Date())}</div>
				</div>
				<div className="weather-box">
					<div className="temperature">
						{Math.round(weather.main.temp)}°C
					</div>
					<div className="weather">
						{weather.weather[0].main}
					</div>
				</div>
			</div>
			) : ('')}
		</main>
    </div>
  );
}

export default App;
