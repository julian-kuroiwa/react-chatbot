import React from 'react';

import Field from '../Field/Field';

import classes from './Radio.module.css';

const radio = props => (
  <label className={classes.Radio}>
    <Field
      id={props.id}
      type='radio'
      name={props.name}
      value={props.value}
      changed={props.radioHandle} />
    {props.label}
  </label>
);

export default radio;
