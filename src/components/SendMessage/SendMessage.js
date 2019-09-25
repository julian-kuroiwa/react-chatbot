import React from 'react';

import Field from '../Field/Field';
import Button from '../Button/Button';

import classes from './SendMessage.module.css';

import sendIcon from '../../assets/Images/send-button.svg';

const sendMessage = props => (
	<form action={props.action} className={classes.SendMessage} onSubmit={props.submitHandler}>
		{props.disableMessage ? <div className={classes.SendMessageOverlay}></div> : ''}
		<Field
			type='text'
			placeholder='Digite sua mensagem aqui...'
			name='userField'
			tall={true}
			refElement={props.refElement}
			disabled={props.disableMessage} />
		<Button>
			<img className={classes.SendMessageIcon} src={sendIcon} alt='Icone do botão Enviar' />
		</Button>
	</form>
);

export default sendMessage;
