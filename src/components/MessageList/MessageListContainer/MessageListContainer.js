import React, {Fragment, Component} from 'react';
import { Field, reduxForm } from 'redux-form'

import classes from './MessageListContainer.module.css';

import Avatar from '../../Avatar/Avatar';
import Balloon from '../../Balloon/Balloon';
// import Radio from '../../Radio/Radio';

export class MessageListContainer extends Component {
	render() {
		const {checked} = this.props;

		return <Fragment>
			<div className={[classes.MessageListContainer, this.props.user ? classes.MessageListContainerUser : ''].join(' ')}>
				<Avatar />
				<Balloon message={this.props.text} />
			</div>
			<div className={classes.MessageListContainerOptions}>
				{this.props.options ? this.props.options.map((element, index) => <label key={index}><Field name={element.name} component='input' type="radio" value={element.value} checked={checked} onChange={this.props.optionHandler} /> {element.label}</label>) : ''}
			</div>
		</Fragment>
	}
};

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(MessageListContainer)
