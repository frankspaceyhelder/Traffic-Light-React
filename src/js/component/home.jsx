import React from "react";

//include images into your bundle
import { useState } from "react";

//create your first component
const Home = () => {
	const [ selectedColour, setSelectedColour ] = useState("green");
	return (
	<div className="trafficLightContainer">
		<div className="lightPole"></div>
		<div className="trafficLight">
		<div
			onClick={() => setSelectedColour("red")}
			className={"light red" + (selectedColour === "red" ? " glow" : "")}
		></div>
		<div
			onClick={() => setSelectedColour("yellow")}
			className={
			"light yellow" + (selectedColour === "yellow" ? " glow" : "")
			}
		></div>
		<div
			onClick={() => setSelectedColour("green")}
			className={"light green" + (selectedColour === "green" ? " glow" : "")}
		></div>
		</div>
	</div>
  );
};

export default Home;
