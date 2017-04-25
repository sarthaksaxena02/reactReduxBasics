import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   
	constructor(props){
		super(props);

		this.state={
			data:''
		}

		this.updateState=this.updateState.bind(this);
		this.clearInput=this.clearInput.bind(this);

	};

	updateState(e){
		this.setState({data:e.target.value});
	}

	clearInput(e){
		this.setState({data:''});
		ReactDOM.findDOMNode(this.refs.myInput).focus();

	}
   



   render() {
      return (
         <div>

         	<input value={this.state.data} onChange={this.updateState} ref="myInput"></input>
            <button onClick = {this.clearInput}>CLEAR</button>
            <h4>{this.state.data}</h4>	
         </div>
      );
   }
}

App.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}

class Header extends React.Component{
	render(){
		return(
			<div>
				<h1>
					Header
				</h1>
			</div>
		)
	}
}


class Content extends React.Component{
	render(){
		return(
			<div>
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
         </div>
		)
	}
}

class TableRow extends React.Component{
	render(){
		return(
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		)
	}
}

export default App;