import React, {Fragment} from 'react';
import classes from './MessageListContainer.module.css';

import Avatar from '../../Avatar/Avatar';
import Balloon from '../../Balloon/Balloon';
import Radio from '../../Radio/Radio';

const messageListContainer = props => (
	<Fragment>
		<div className={[classes.MessageListContainer, props.user ? classes.MessageListContainerUser : ''].join(' ')}>
			<Avatar />
			<Balloon message={props.text} />
		</div>
		<div className={classes.MessageListContainerOptions}>
			{props.options ? props.options.map((element, index) => <Radio key={index} id={element.id} type='radio' name={element.name} value={element.value} label={element.label} radioHandle={props.optionHandler} />) : ''}
		</div>
	</Fragment>
);

export default messageListContainer;
