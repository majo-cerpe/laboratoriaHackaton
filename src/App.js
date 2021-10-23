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

import AdminDashboard from './components/adminView/menuOptionComponents/AdminDashboard'
import UserAdmin from './components/adminView/menuOptionComponents/UserAdmin';
import BenefitAdmin from './components/adminView/menuOptionComponents/BenefitAdmin';
import PartnershipAdmin from './components/adminView/menuOptionComponents/PartnershipAdmin';
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

				<Route exact path="/perfil">
					<MiPerfil />
				</Route>

				<Route exact path="/beneficios">
					<ContainerCards />
				</Route>


				{/*vista admin - inicio(dashboard)*/}
				<Route exact path="/adminViewDashboard">
					<div className="userAdmin">
						<AdminAsideMenu />
						<div className="userAdminMain" >
							<AdminDashboard />
						</div>
					</div>
				</Route>

				{/*vista admin - administración de usuarios*/}
				<Route exact path="/userAdmin">
					<div className="userAdmin">
						<AdminAsideMenu />
						<div className="userAdminMain" >
							<UserAdmin />
						</div>
					</div>
				</Route>

				{/*vista admin - beneficios*/}
				<Route exact path="/benefitAdmin">
					<div className="userAdmin">
						<AdminAsideMenu />
						<div className="userAdminMain" >
							<BenefitAdmin />
						</div>
					</div>
				</Route>

				{/*vista admin - convenios*/}
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
