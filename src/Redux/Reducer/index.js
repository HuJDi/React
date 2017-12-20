// var initstate={
// 	homelist:[]
// }

// const reducer =(state=initstate,info)=>{
// 	let{type,payload}=info;
// 	console.log(payload)
// 	switch(type){
// 		case "Homelist":
// 			return state.homelist=[...payload];
// 		// default:
// 		// 	return state;

// 	}
// }

const reducer1 =(state=[],info)=>{
	let{type,payload}=info;
	switch(type){
		case "Homelist":
			return [...payload];
		default:
			return state;
	}
}
const reducer2 =(state=[],info)=>{
	let{type,payload}=info;
	switch(type){
		case "cartlist":
			return [...state,payload];
		default:
			return state;
	}
}
const reducer3 =(state=[],info)=>{
	let{type,payload}=info;

	switch(type){
		case "changeTitle":
			return payload;
		default:
			return state;
	}
}

export {reducer1,reducer2,reducer3};