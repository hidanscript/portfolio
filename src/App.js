import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

//Components
import Home from './Components/Home';
import About from './Components/About';
import BG from './Components/BG';

class App extends Component {

	render() {
		return(
			
			<div className="App">
				<Router>
					<CSSTransition>
						<Switch>
							<Route path="/home" component={Home}/>
							<Route path="/about" component={About}/>
							<Route path="/" component={Home}/>
						</Switch>
					</CSSTransition>
				</Router>
				<BG/>
			</div>
		);
	}
}

export default App;