import React from 'react';

export default class extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
			{this.props.winner ?
				<Winner ref="winner" winner={this.props.winner} /> :
				<Vote {...this.props} />
			}
			</div>
		)
	}
};