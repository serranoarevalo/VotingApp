import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import reactMixin from 'react-mixin';

export default class Vote extends React.Component {
	getPair() {
		return this.props.pair || [];
	}
	isDisabled() {
		return !!this.props.hasVoted;
	}
	hasVotedFor(entry) {
		return this.props.hasVoted === entry;
	}
	render() {
		return (
			<div className="voting">
			{this.getPair().map(entry => 
				<button key={entry}
						disabled={this.isDisabled()}
						onClick={() => this.props.vote(entry)}>
				<h1>{entry}</h1>
				{this.hasVotedFor(entry) ?
					<div className="label">Voted</div> :
					null
				}
				</button>
				)}
			</div>
		);
	}
}

reactMixin(Vote.prototype, PureRenderMixin);
