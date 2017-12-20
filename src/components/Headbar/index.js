import React,{Component} from "react";
import "./index.scss"
import axios from "axios";
import {connect} from "react-redux"

class Headbar extends React.Component{
	constructor(){
		super();
		this.state={
			dataList:[],
			searchList:[]
		}
	}

	componentWillMount() {
		axios.get("/v4/api/film/now-playing?page=1&count=35").then(res=>{
			this.setState({
				dataList:res.data.data.films
			})
		
		})
	}

	render(){
		let {searchList}=this.state
		var searchLi=[]
		for(var i=0;i<searchList.length;i++){
			console.log(searchList[i].id)
			var self=this;
			searchLi.push(
				<li name={searchList[i].id}  key={i}  onClick={self.detailSearch.bind(self)}>
					{searchList[i].name}
				</li>
			)
		}

		return <div id="headbar">
			<span  onClick={this.handclick.bind(this)}>商城</span>
			<input type='button' value='搜索'  className='search'/>
			<input type='text' placeholder='请输入要搜索的商品' className='text' onChange={this.seachChange.bind(this)}/>
			<ul>{searchLi}</ul>
		</div>
	}
	handclick(){
		console.log(this.props)
		this.props.event()
	}
	seachChange(e){
		if(e.target.value!=""){
			var regexp=new RegExp(e.target.value)
		}
		var List=[]
		let{dataList}=this.state
		if(regexp){
 	   		for(var i=0;i<dataList.length;i++){
 	   			if(regexp.test(dataList[i].name)){
 	   				List.push(dataList[i])
 	   			}
 	   		}
 	   	}
		this.setState({
			searchList:List
		})
	}
	detailSearch(e){
		this.props.history.push(`/detail/${e.target.getAttribute("name")}`)
	}
}
export default connect(
	   null,
	   null
	)(Headbar);