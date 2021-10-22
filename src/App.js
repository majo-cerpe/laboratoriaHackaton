import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import SignInSide from './components/SignInSide'
import Dashboard from './components/DashBoard/Dashboard'
import MiPerfil from './components/DashBoard/MiPerfil'

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
				<Route exact path="/miperfil">
				  <MiPerfil />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
