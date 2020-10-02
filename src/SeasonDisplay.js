import React from "react";
import "./SeasonDisplay.css";

const SeasonConfig = {
	summer: {
		text: "Lets' hit the beach",
		iconName: "sun",
	},
	winter: {
		text: "Burr, it's cold!",
		iconName: "snowflake",
	},
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		if (lat > 0) {
			return "summer";
		} else {
			return "winter";
		}
	} else {
		if (lat > 0) {
			return "winter";
		} else {
			return "summer";
		}
	}
};
const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = SeasonConfig[season];
	const time = props.time;

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<br />
			<h2>Time: {time}</h2>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
