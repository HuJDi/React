import React from "react";
import axios from "axios"
import './index.scss'
import {connect} from "react-redux"
import Headbar from "../Headbar"
import Sidebar from "../Sidebar"

class Detail extends React.Component{
	constructor(){
		super();
		this.state={
			detailList:[],
			show:false
		}
	}
	componentWillMount(){
		axios.get(`/v4/api/film/${this.props.match.params.id}?__t=1511938080285`).then(res=>{
			this.setState({
				detailList:res.data.data.film
			})
			
		})
	}
	render(){
		var detailNum=0;
		if(this.state.detailList.length==0){
			return <p className='loading'>正在加载中。。。</p>
		}else{
			let {cover,name,id,synopsis}=this.state.detailList
			return <div id='detail'>
			    <Headbar event={()=>
					this.setState({
						show:!this.state.show
					})
				} {...this.props}></Headbar>
				<Sidebar isshow={this.state.show} event={()=>
					this.setState({
						show:false
					})
				} {...this.props}></Sidebar>
			{
				<div>
					<img src={cover.origin}/>
					<p>名称：<span>{name}</span></p>
					<p>价格：￥<span>{id-3000}</span></p>
					<p>简介：<span>{synopsis}</span></p>
					<button onClick={this.cartclick.bind(this)}>加入购物车</button>
				</div>
			}
			</div>
		}
	}
	cartclick(){
		console.log(this.state.detailList)
		this.props.cartlist(this.state.detailList)
	}

}

export default connect(
	null,
	{
		cartlist:(cartlist)=>{
			return (dispatch)=>{
				dispatch({
					type:'cartlist',
					payload:cartlist
				})
			}
		}
	}
)(Detail);