import React from 'react';
import { Field, reduxForm } from 'redux-form';

// import InputText from '../Field/Field';
import Button from '../Button/Button';

import classes from './SendMessage.module.css';

import sendIcon from '../../assets/Images/send-button.svg';

const sendMessage = props => {
	const {handleSubmit} = props;

	return (
		<form action={props.action} className={classes.SendMessage} onSubmit={handleSubmit(props.submitHandler)}>
			{props.disableMessage ? <div className={classes.SendMessageOverlay}></div> : ''}
			<Field
				type='text'
				placeholder='Digite sua mensagem aqui...'
				name='userField'
				component='input'
				props={{ disabled: props.disableMessage, className: classes.SendMessageInput }} />
			<Button>
				<img className={classes.SendMessageIcon} src={sendIcon} alt='Icone do botão Enviar' />
			</Button>
		</form>
	)
};

export default reduxForm({
  form: 'userForm',
})(sendMessage)
