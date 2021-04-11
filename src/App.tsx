import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Experiment from './pages/Experiment';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useContext, useState } from 'react';
import { AppContext, AppContextProvider } from './components/use-reducer-context';
import Questionary from './pages/Questionary';
import { State } from 'ionicons/dist/types/stencil-public-runtime';


const App: React.FC = () => {
	const { state, dispatch } = useContext(AppContext);

	const int = setInterval(function(){
		console.log(state);
	  }.bind(this), 1000);

	return(
		<IonApp>
		<AppContextProvider>
			<IonReactRouter>
				<IonRouterOutlet>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route  path="/home">
					<Home />
				</Route>
				<Route exact path="/experiment">
					<Experiment />
				</Route>
				<Route
					exact
					path="/questionary/:id"
					component={Questionary}
				></Route>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>
				</IonRouterOutlet>
			</IonReactRouter>
		</AppContextProvider>
		</IonApp>
	);
}

export default App;
