import React from 'react';

class Apps extends React.Component{
	render(){
		return(
				<div>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
					{this.props.children}
				</div>
			)
	}
}

export default Apps;

