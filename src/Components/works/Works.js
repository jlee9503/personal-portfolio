import React, { Component } from "react";
import "./Works.css";
import { workData } from "./Worksdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCss3,
	faHtml5,
	faJs,
	faPython,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
	faDatabase,
	faLink,
	faUnlink,
} from "@fortawesome/free-solid-svg-icons";

class Works extends Component {
	state = {};

	render() {
		return (
			<div id="works">
				{workData.map((data, dataNum) => {
					return (
						<div className="work-wrap" key={dataNum}>
							{/* Education */}
							<div className="education">
								<div className="education-wrapper">
									<div className="work-title">
										<h1>{data.section.education}</h1>
									</div>

									<div className="description">
										<h4>{data.school.name}</h4>
										<p className="major">
											{data.school.major}, {data.school.graduation}
										</p>
										<p>{data.school.description}</p>
									</div>
								</div>
							</div>

							{/* Works */}
							<div className="work">
								<div className="work-wrapper">
									<div className="work-title">
										<h1>{data.section.work}</h1>
									</div>

									<div className="description">
										<div className="work-info">
											<div className="project-wrapper">
												<div className="project-image work1-margin">
													<a href={data.workLinks.work1}>
														<img
															src={`/images/${data.workImage.w1_image}`}
															alt={data.workTitle.work1}
														/>
													</a>
													<div className="link-icon">
														<FontAwesomeIcon icon={faLink} />
													</div>
												</div>
												<div className="project-description">
													<p>{data.workDescription.w1Description}</p>
												</div>
											</div>

											<div className="project-title">
												<h5>{data.workTitle.work1}</h5>
											</div>
										</div>

										<div className="work-info">
											<div className="project-wrapper">
												<div className="project-image">
													<a href={data.workLinks.work2}>
														<img
															src={`/images/${data.workImage.w2_image}`}
															alt={data.workTitle.work2}
														/>
													</a>
													<div className="link-icon">
														<FontAwesomeIcon icon={faLink} />
													</div>
												</div>
												<div className="project-description">
													<p>{data.workDescription.w2Description}</p>
												</div>
											</div>

											<div className="project-title">
												<h5>{data.workTitle.work2}</h5>
											</div>
										</div>

										<div className="work-info">
											<div className="project-wrapper">
												<div className="project-image">
													<a href={data.workLinks.work3}>
														<img
															src={`/images/${data.workImage.w3_image}`}
															alt={data.workTitle.work3}
														/>
													</a>
													<div className="link-icon">
														<FontAwesomeIcon icon={faLink} />
													</div>
												</div>
												<div className="project-description">
													<p>{data.workDescription.w3Description}</p>
												</div>
											</div>
											<div className="project-title">
												<h5>{data.workTitle.work3}</h5>
											</div>
										</div>

										<div className="work-info">
											<div className="project-wrapper">
												<div className="project-image">
													<img
														src={`/images/${data.workImage.w4_image}`}
														alt={data.workTitle.work4}
													/>
													<div className="link-icon">
														<FontAwesomeIcon icon={faUnlink} />
													</div>
												</div>
												<div className="project-description">
													<p>{data.workDescription.w4Description}</p>
												</div>
											</div>
											<div className="project-title">
												<h5>{data.workTitle.work4}</h5>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Skills */}
							<div className="skill">
								<div className="skill-wrapper">
									<div className="work-title">
										<h1>{data.section.skill}</h1>
									</div>

									<div className="description">
										<div className="skill-name">
											<FontAwesomeIcon icon={faHtml5} className="html" />
											<p>{data.skills.s1}</p>
											<div className="skill-bars">
												<div className="skill-bars skill-bar-html"></div>
											</div>

											<FontAwesomeIcon icon={faCss3} className="css" />
											<p>{data.skills.s2}</p>
											<div className="skill-bars">
												<div className="skill-bars skill-bar-css"></div>
											</div>

											<FontAwesomeIcon icon={faJs} className="js" />
											<p>{data.skills.s3}</p>
											<div className="skill-bars">
												<div className="skill-bars skill-bar-js"></div>
											</div>

											<FontAwesomeIcon icon={faReact} className="react" />
											<p>{data.skills.s4}</p>
											<div className="skill-bars">
												<div className="skill-bars skill-bar-react"></div>
											</div>

											<FontAwesomeIcon icon={faPython} className="python" />
											<p>{data.skills.s5}</p>
											<div className="skill-bars">
												<div className="skill-bars skill-bar-python"></div>
											</div>

											<FontAwesomeIcon icon={faDatabase} className="sql" />
											<p>{data.skills.s6}</p>
											<div className="skill-bars">
												<div className="skill-bars skill-bar-sql"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Works;
