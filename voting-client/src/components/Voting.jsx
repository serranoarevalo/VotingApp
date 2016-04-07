import React from 'react';
import Winner from './Winner';
import Vote from './Vote';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import reactMixin from 'react-mixin';
import {connect} from 'react-redux';

export class Voting extends React.Component {
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

function mapStateToProps(state){
	return {
		pair: state.getIn(['vote', 'pair']),
		winner: state.get('winner')
	}
}


reactMixin(Voting.prototype, PureRenderMixin);


export const VotingContainer = connect(mapStateToProps)(Voting);