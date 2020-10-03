import React from "react";
import "./App.css";
import About from "./Components/about/About";
import Contact from "./Components/contact/contact";
import Home from "./Components/home/Home";
import Navbar from "./Components/home/Navbar";
import Works from "./Components/works/Works";

function App() {
	return (
		<div className="app">
			<div id="main">
				<Navbar />
				<Home />
			</div>
			<About />
			<Works />
			<Contact />
		</div>
	);
}

export default App;
