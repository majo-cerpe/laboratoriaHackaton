import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import SignInSide from './components/SignInSide'
import Dashboard from './components/DashBoard/Dashboard'
import AdminAsideMenu from './components/adminView/AdminAsideMenu'
import ContainerCards from './components/benefits/ContainerCards'


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
				<Route exact path="/adminView">
					<div>
						<AdminAsideMenu />
					</div>
					</Route>
				<Route exact path="/beneficios">
					<ContainerCards />

				</Route>
			</Switch>
		</Router>
	);
}

export default App;
