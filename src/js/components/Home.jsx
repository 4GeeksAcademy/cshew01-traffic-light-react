import React, { useState } from "react";
// import TrafficLight from "./trafficLight.jsx";
import "./home.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [ selectedColor, setSelectedColor ] = useState("red");

	return (
	<>
		<div className="hanger"></div>
		<div className="traffic-light">
			<div className={`red lights ${selectedColor === "red" ? " selected" : ""}`} onClick={()=>console.log("hi")}></div>
			<div className={`yellow lights ${selectedColor === "yellow" ? " selected" : ""}`}></div>
			<div className={`green lights ${selectedColor === "green" ? " selected" : ""}`}></div>
		</div>
	</>
	);
};

export default Home;