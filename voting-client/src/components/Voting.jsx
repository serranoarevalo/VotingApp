import React from 'react';
import Winner from './Winner';
import Vote from './Vote';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import reactMixin from 'react-mixin';

export default class Voting extends React.Component {
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
		);
	}
};

reactMixin(Voting.prototype, PureRenderMixin);