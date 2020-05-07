import React from 'react';

const api = {
	key: '8441299d786f42839c775fe9179d963a',
	base: 'https://api.openweathermap.org/data/2.5/'
};

function App() {

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
					placeHolder="Search..."
				/>
			</div>
			<div className="location-box">
				<div className="location">
					New York City, US
				</div>
				<div className="date">{dateBuilder(new Date())}</div>
			</div>
		</main>
    </div>
  );
}

export default App;
