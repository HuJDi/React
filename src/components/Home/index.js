import React,{Component} from "react";
import "./index.scss"
import ReactSwipe from 'react-swipe';
import HomeList from "./HomeList";
import {connect} from "react-redux"
import Headbar from "../Headbar"
import Sidebar from "../Sidebar"
class Home extends React.Component{
	constructor(){
		super();
		this.state={
			show:false
		}
	}
	componentDidMount(){

	}
	render(){
		console.log(this)
		return <div id='home'>
		    <Headbar {...this.props} event={()=>
			this.setState({
				show:!this.state.show
			})
		}></Headbar>
			<Sidebar isshow={this.state.show} {...this.props} event={()=>
				this.setState({
					show:false
				})
			}></Sidebar>
			<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:1,speed:3000}}>
			           <img src="https://pic.maizuo.com/h5PicUpload/1b15a665e6bd7ba1fb1251e45b75f2eb.jpg"/>
			           <img src='https://pic.maizuo.com/usr/movie/d8dc842930a9744b7cc8c1eca7f6e402.jpg'/>
			           <img src='https://pic.maizuo.com/usr/movie/102b333bfea2170ad6ae9a90cf5a6f20.jpg'/>
		          	</ReactSwipe>
		          	<HomeList  {...this.props}></HomeList>
		</div>
	}
}

export default connect(
	null,
	null
	)(Home);