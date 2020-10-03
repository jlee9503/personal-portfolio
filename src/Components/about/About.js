import React, { Component } from "react";
import "./About.css";
import { aboutData } from "./Aboutdata";

class About extends Component {
	state = {};
	render() {
		return (
			<div id="about">
				{aboutData.map((data, idx) => {
					return (
						<div className="about-wrapper" key={idx}>
							<img
                src={`/images/${data.image}`}
								alt="profile"
								className="about-profile"
							/>

							<div className="content">
								<h1 className="title">About Me</h1>
								<p className="text">{data.bio}</p>

								<h1 className="title contact">Contact Details</h1>
								<div className="contact_info">
									<p className="text">{data.email}</p>
									<p className="text">{data.phone}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default About;
