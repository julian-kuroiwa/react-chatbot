import React, {Fragment} from 'react';
import { Field, reduxForm } from 'redux-form'

import classes from './MessageListContainer.module.css';

import Avatar from '../../Avatar/Avatar';
import Balloon from '../../Balloon/Balloon';
// import Radio from '../../Radio/Radio';

const messageListContainer = props => {
	const {checked} = props;

	return (
		<Fragment>
			<div className={[classes.MessageListContainer, props.user ? classes.MessageListContainerUser : ''].join(' ')}>
				<Avatar />
				<Balloon message={props.text} />
			</div>
			<div className={classes.MessageListContainerOptions}>
				{props.options ? props.options.map((element, index) => <label key={index}><Field name={element.name} component='input' type="radio" value={element.value} checked={checked} onChange={props.optionHandler} /> {element.label}</label>) : ''}
			</div>
		</Fragment>
	)
};

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(messageListContainer)
