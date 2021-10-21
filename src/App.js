import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import SignInSide from './components/SignInSide'
import { Home } from './components/Home';
import Dashboard from './components/DashBoard/Dashboard'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<SignInSide />
				</Route>
				<Route exact path="/home">
					<Dashboard />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
