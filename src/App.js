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
import UserAdmin from './components/adminView/menuOptionComponents/userAdmin/UserAdmin';
import UserAdd from './components/adminView/menuOptionComponents/userAdmin/UserAdd'
import UsersTable from './components/adminView/menuOptionComponents/userAdmin/UsersTable'
import BenefitAdmin from './components/adminView/menuOptionComponents/BenefitAdmin';
import PartnershipAdmin from './components/adminView/menuOptionComponents/PartnershipAdmin';
import MiPerfil from './components/MiPerfilView/MiPerfil'; 
import RhhView from './components/RRHHView/RhhView';



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

				<Route exact path="/rrhh">
					<RhhView />
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
				<Route exact path="/userAdmin/Add">
					<div className="userAdmin">
						<AdminAsideMenu />
						<div className="userAdminMain" >
							<UserAdmin />
							<UserAdd />
						</div>
					</div>
				</Route>

				{/*vista admin - Agregar Usuario*/}
				<Route exact path="/userAdmin/editOrDelete">
					<div className="userAdmin">
						<AdminAsideMenu />
						<div className="userAdminMain" >
							<UserAdmin />
							<UsersTable />
						</div>
					</div>
				</Route>

				{/*vista admin - Editar o borrar usuarios*/}
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
