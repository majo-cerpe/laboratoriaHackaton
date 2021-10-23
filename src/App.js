import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import SignInSide from './components/SignInSide'
import Dashboard from './components/DashBoard/Dashboard'
import AdminAsideMenu from './components/adminView/AdminAsideMenu'
import MiPerfil from './components/MiPerfilView/MiPerfil'


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
					<did>
						<AdminAsideMenu />
					</did>
				</Route>
				<Route exact path="/perfil">
					<MiPerfil />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
