import React from 'react';
import logo from './logo.svg';
import myImage from './images/IMG_20200301_211337.jpg';
import './App.css';

function App() {
	return (
		<div className="App">
			<h2>My new React project</h2>
			<img src={myImage} alt="vivek" height="400px" width="auto" />
		</div>
	);
}

export default App;
