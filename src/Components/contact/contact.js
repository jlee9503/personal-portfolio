import React, { Component } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { aboutData } from "../about/Aboutdata";

class contact extends Component {
	state = {};
	render() {
		return (
			<div id="contact">
				<div></div>
				<div className="scroll-up">
					<div className="scroll-icon">
						<a href="#main">
							<FontAwesomeIcon
								icon={faChevronCircleUp}
								className="scroll-up-icon"
							/>
						</a>
					</div>
				</div>
				{/* <div className="contact-form"></div> */}

				<div className="contact-info">
					<h3>Follow Along</h3>

					{aboutData.map((data, idx) => {
						return (
							<div key={idx}>
								<div className="social-icons">
									<div className="social-icon">
										<a
											href={data.linkedin}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FontAwesomeIcon icon={faLinkedinIn} className="icon" />
										</a>
									</div>
									<div className="social-icon">
										<a
											href={data.instagram}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FontAwesomeIcon icon={faInstagram} className="icon" />
										</a>
									</div>
									<div className="social-icon">
										<a
											href={data.github}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FontAwesomeIcon icon={faGithub} className="icon" />
										</a>
									</div>
								</div>

								<div className="info">
									<h5 className="contact-text">Jungsu Lee</h5>
									<p className="contact-text">
										<span role="img" aria-label="email">
											📧
										</span>{" "}
										: {data.email}
									</p>
									<p className="contact-text">
										<span role="img" aria-label="phone">
											📲
										</span>{" "}
										: {data.phone}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default contact;
