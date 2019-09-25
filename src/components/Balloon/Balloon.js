import React from 'react';
import PropTypes from 'prop-types';
import classes from './Balloon.module.css';

const balloon = props => (
	<p className={classes.Balloon}>{props.message}</p>
);

balloon.propTypes = {
	message: PropTypes.string,
};

export default balloon;
