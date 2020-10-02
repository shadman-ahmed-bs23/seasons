import React from "react";
import "./App.css";

//Importing components
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
	state = {
		lat: null,
		errorMessage: "",
		time: new Date().toLocaleTimeString(),
	};
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
		setInterval(() => {
			this.setState({ time: new Date().toLocaleTimeString() });
		}, 1000);
	}
	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage} </div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} time={this.state.time} />;
		}
		return <Spinner message="Please allow your location!" />;
	}

	render() {
		return <div className="border">{this.renderContent()}</div>;
	}
}

export default App;
