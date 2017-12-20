import React,{Component} from "react";
import "./index.scss"
import Headbar from "../Headbar"
import Sidebar from "../Sidebar"

class App extends React.Component{
	constructor(){
		super();
		this.state={
			show:false
		}
	}
	render(){
		return <div id="app">
			
			{
				this.props.children
			}
		</div>
	}
}

export default App;