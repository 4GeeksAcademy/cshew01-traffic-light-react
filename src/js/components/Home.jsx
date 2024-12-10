import React, { useState } from "react";
// import TrafficLight from "./trafficLight.jsx";
import "./home.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [ selectedColor, setSelectedColor ] = useState("green");

	return (
	<>
		<div className="hanger"></div>
		<div className="traffic-light">
			<div className={`red lights ${selectedColor === "red" ? " selected" : ""}`} onClick={()=>setSelectedColor("red")}></div>
			<div className={`yellow lights ${selectedColor === "yellow" ? " selected" : ""}`} onClick={()=>setSelectedColor("yellow")}></div>
			<div className={`green lights ${selectedColor === "green" ? " selected" : ""}`} onClick={()=>setSelectedColor("green")}></div>
		</div>
	</>
	);
};

export default Home;