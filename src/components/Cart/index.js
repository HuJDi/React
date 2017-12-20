import React,{Component} from "react";
import "./index.scss"
import {connect} from "react-redux"
import axios from "axios"
import Headbar from "../Headbar"
import Sidebar from "../Sidebar"
var _ = require('lodash');

class Cart extends React.Component{
	constructor(){
		super();
		this.state={
			show:false
		}
	}
	render(){
		let {cartlist} = this.props

		var uniqCart=_.uniq(cartlist)

		function getCartNum(carts,cartChild){
			var num=0;
			for(let i=0;i<carts.length;i++){
				if(carts[i]===cartChild){
					num++
				}
			}
			return num;
		}
		var cartComponent=[]
		var cartTotal=0
		if(uniqCart.length==0){
			cartComponent.push( <p className='nullCart'>购物车暂无商品</p>)
		}else{
			for(let i=0;i<uniqCart.length;i++){
				var cartNum=getCartNum(cartlist,uniqCart[i])
				cartComponent.push(
					<li key={i} >
						<img src={uniqCart[i].poster.origin}/>
						<div> 
							<p className="nowTitle">商品名</p>
							<p>{uniqCart[i].name}</p>
						</div>
						<div>
							<p className='topTitle'>数量</p>
							<p className='botData'>{cartNum}</p>
						</div>
						<div>
							<p  className='topTitle'>价格</p>
							<p  className='botData'>￥{uniqCart[i].id-3000}</p>
						</div>
						<div>
							<p  className='topTitle'>总计</p>
							<p  className='botData'>￥{(uniqCart[i].id-3000)*cartNum}</p>
						</div>
					</li>
				)
				cartTotal+=(uniqCart[i].id-3000)*cartNum
			}
			cartComponent.push( <div className='total'>
			共有 <span>{cartlist.length}</span> 件商品，总计：￥<span>{cartTotal}</span>
		</div>)
		}

		
		
		return <div id='cart'>
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
			<ul>
				{cartComponent}
			</ul>
			
		</div>
		
	}
}
export default connect(
	(state)=>{
		return {
			cartlist:state.cartlist
		}
	},
	null
)(Cart);