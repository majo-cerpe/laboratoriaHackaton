import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import SignInSide from './components/SignInSide'
import Dashboard from './components/DashBoard/Dashboard'
import AdminAsideMenu from './components/adminView/AdminAsideMenu'
import AdminDashboard from './components/adminView/menuOptionComponents/AdminDashboard'
import UserAdmin from './components/adminView/menuOptionComponents/UserAdmin';
import BenefitAdmin from './components/adminView/menuOptionComponents/BenefitAdmin';
import PartnershipAdmin from './components/adminView/menuOptionComponents/PartnershipAdmin';

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
				<Route exact path="/adminDashboard">
					<div className="userAdmin">
						<AdminAsideMenu />
						<div className="userAdminMain" >
							<AdminDashboard />
						</div>
					</div>

				</Route>
				<Route exact path="/userAdmin">
					<div className="userAdmin">
						<AdminAsideMenu />
						<div className="userAdminMain" >
							<UserAdmin />
						</div>
					</div>

				</Route>
				<Route exact path="/benefitAdmin">
					<div className="userAdmin">
						<AdminAsideMenu />
						<div className="userAdminMain" >
							<BenefitAdmin />
						</div>
					</div>

				</Route>
				<Route exact path="/partnershipAdmin">
					<div className="userAdmin">
						<AdminAsideMenu />
						<div className="userAdminMain" >
							<PartnershipAdmin />
						</div>
					</div>

				</Route>
			</Switch>
		</Router>
	);
}

export default App;
