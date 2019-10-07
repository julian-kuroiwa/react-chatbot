import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

import MessageList from '../components/MessageList/MessageList';
import MessageListContainer from '../components/MessageList/MessageListContainer/MessageListContainer';
import SendMessage from '../components/SendMessage/SendMessage';

import * as actionTypes from '../store/actions';

const chatbot = props => {
	let messages = props.messages.map((element, index) => {
		return <MessageListContainer
						key={index}
						user={element.user}
						text={element.message}
						options={element.options}
						optionHandler={props.onSubmitMessage} />
	});

	return (
		<Fragment>
		<MessageList
			messages={props.messages} >
				{messages}
		</MessageList>
		{(props.currentQuestion === 'end'
			? <p className='finish'>That's it! :D</p>
			: <SendMessage
					refElement={el => this.element = el}
					disableMessage={props.disableInput}
					submitHandler={props.onSubmitMessage} />
		)}
	</Fragment>
	);
};

const mapStateToProps = state => {
	return {
		answers: state.data.answers,
		messages: state.data.messages,
		counter: state.data.counter,
		disableInput: state.data.disableInput,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onSubmitMessage: data => {
			dispatch({type: actionTypes.SUBMIT_MESSAGE, value: data.target ? data.target.value : data.userField})
			dispatch({type: actionTypes.NEW_QUESTION})
			dispatch(reset('userForm'));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(chatbot);
