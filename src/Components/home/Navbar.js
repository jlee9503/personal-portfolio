import React, { Component } from "react";
import { menuItems } from "./Menu-items";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			clicked: false,
		};
	}

	// handle mobile nav bar button
	handleClicked = () => {
		this.setState({
			clicked: !this.state.clicked,
		});
	};

	// close nav bar when the section is clicked
	closeNavBar = () => {
		this.setState({
			clicked: false,
		});
	};

	// handle scroll status to display nav bar through entire page
	componentDidMount() {
		window.addEventListener("scroll", () => {
			const navbar = document.getElementById("nav-list");
			if (window.scrollY > 500) {
				navbar.classList.add("scrolled");
			} else {
				navbar.classList.remove("scrolled");
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener("scroll");
	}

	render() {
		return (
			<nav className="nav-bar" id="nav-bar">
				<div className="mobile-nav-icon" onClick={this.handleClicked}>
					<FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} />
				</div>

				<ul
					id="nav-list"
					className={this.state.clicked ? "nav-list-active" : "nav-list"}
				>
					{menuItems.map((item, idx) => {
						return (
							<li key={idx} className="nav-container">
								<a
									href={item.url}
									className={item.cName}
									onClick={this.closeNavBar}
								>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
