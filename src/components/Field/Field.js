import React from 'react';
import classes from './Field.module.css';

const field = props => (
		<input
			className={classes.Field}
			id={props.id}
			type={props.type}
			placeholder={props.placeholder}
			name={props.name}
			ref={props.refElement}
			value={props.value}
			onChange={props.changed}
			disabled={props.disabled} />
);

export default field;
