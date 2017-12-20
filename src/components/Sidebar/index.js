import React ,{component} from "react"
import {NavLink} from "react-router-dom";
import "./index.scss"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class Sidebar extends React.Component{
	constructor(){
		super();
		this.state={

		}
	}
	render(){
		return <div>
			<ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
			{
				this.props.isshow?
				<ul id="sidebar" onClick={()=>{
					this.props.event();
				}}>
					<li><NavLink to="/home">首页</NavLink></li>
					<li><NavLink to="/cart">购物车</NavLink></li>
				</ul>
				:null
			}
			</ReactCSSTransitionGroup>
		</div>
	}
}

export default Sidebar;