import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
	<header className = "App-header">
	 <img src={logo} className = 'App-logo' alt = "logo" />
	  <p>
	     Edit <code>src/App.js</code> and save reload.
	   </p>
	   <a
	     className = "App-link"
	     href = "https://www.polito.it/"
	     target = "_blank"
	     rel = "noopener noreferrer"
	   >
	     PoliTo
	   </a>
	</header>
     </div>
  );
}


export default App;
