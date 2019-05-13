import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Home from './Components/Home';
import About from './Components/About';

class App extends Component {

	render() {
		return(
			<div className="App">
				<Router>
					<Switch>
						<Route path="/home" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/" component={Home}/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;