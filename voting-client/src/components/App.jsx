import React from 'react';
import {List, Map} from 'immutable';

export default class extends React.Component {
	render() {
		return React.cloneElement(this.props.children, {pair: pair, tally:tally});
	}
}