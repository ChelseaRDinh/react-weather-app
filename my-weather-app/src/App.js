import React from 'react';

const api = {
	key: '8441299d786f42839c775fe9179d963a',
	base: 'https://api.openweathermap.org/data/2.5/'
};

function App() {
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
		</main>
    </div>
  );
}

export default App;
