import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const counter=(state=0,action) => {
	switch(action.type){
		case 'INC':
			return state+1;
		case 'DEC':
			return state-1;
		default:
			return state;
	}
}

const store=createStore(counter);


const Counter=({value,
			onIncrement,
			onDecrement
			})=>(
	<div>	
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
);

const render=()=>{
	ReactDOM.render(
		<Counter value={store.getState()}
			onIncrement={()=>
				store.dispatch({
					type:'INC'
				})
			}
			onDecrement={()=>
				store.dispatch({
					type:'DEC'
				})
			}
		 />,
		document.getElementById('app')
	);
}

store.subscribe(render);
render();

