import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//Components
import Home from './Components/Home';
import About from './Components/About';
import BG from './Components/BG';

class App extends Component {

	render() {
		return(
			
			<div className="App">
					<Route render={({location}) => (
						<TransitionGroup>
							<CSSTransition
							key={location.key}
							timeout={300}
							classNames="fade"
							>
								<Switch>
									<Route exact path="/home" component={Home}/>
									<Route path="/about" component={About}/>
									<Route path="/" component={Home}/>
								</Switch>
							</CSSTransition>
						</TransitionGroup>
				)} />
				<BG/>
			</div>
		);
	}
}

export default App;