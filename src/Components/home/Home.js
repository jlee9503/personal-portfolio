import React, { Component } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { homeData } from "./Homedata";
import { aboutData } from "../about/Aboutdata";

class Home extends Component {
	state = {};
	render() {
		return (
			<div id="home">
				{aboutData.map((data, idx) => {
					return (
						<img
							key={idx}
							src={`public/images/${data.image}`}
							alt="profile"
							className="profile"
						/>
					);
				})}

				{homeData.map((data, idx) => {
					return (
						<div key={idx} className="intro">
							<h1 className="name">{`I'm ${data.title}`}</h1>
							<h3 className="intro-text">{data.occupation}</h3>
							<h3 className="intro-text">{data.description}</h3>
							<p className="hashtags">{data.hashtags}</p>
						</div>
					);
				})}

				<div className="scroll-down">
					<a href="#about">
						<FontAwesomeIcon
							icon={faChevronCircleDown}
							className="scroll-down-icon"
						/>
					</a>
				</div>
			</div>
		);
	}
}

export default Home;
