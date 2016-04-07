import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import reactMixin from 'react-mixin';

export default class Winner extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="winner">
				Winner is {this.props.winner}!
			</div>
		)
	}
}

reactMixin(Winner.prototype, PureRenderMixin);