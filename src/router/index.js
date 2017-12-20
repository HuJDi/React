import React from "react";
import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom'

import App from "../components/App";
import Home from "../components/Home";
import Cart from "../components/Cart";
import Headbar from "../components/Headbar";
import Detail from "../components/Detail";

import {Provider} from "react-redux";
import store from "@/Redux/Store"

const router =(
	<Provider store={store}>
	<Router>
		<App>
			<Switch>
				<Route path="/home" component={Home}/>
				<Route path="/cart" component={Cart}/>
				<Route path="/headbar" component={Headbar}/>
				<Route path="/detail/:id" component={Detail}/>
				<Redirect from = "*"  to ="/home"/>
			</Switch>
		</App>
	</Router>
	</Provider>
)

export default router;