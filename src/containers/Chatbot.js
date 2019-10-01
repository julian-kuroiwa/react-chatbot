import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

import MessageList from '../components/MessageList/MessageList';
import SendMessage from '../components/SendMessage/SendMessage';

import questions from '../data/questions';

class Chatbot extends Component {
	optionHandle = event => {
		this.setState({
			answers: {
				...this.state.answers,
				...{
					[questions[this.state.counter].id]: event.target.value
				}
			},
			messages: [
				...this.state.messages,
				...[{message: event.target.value, user: true}]
			],
			counter: this.state.counter + 1,
		});
	}

	render() {
		return (
			<Fragment>
				<MessageList
					messages={this.props.messages}
					optionHandler={this.props.onSubmitMessage} />
				{(this.props.currentQuestion === 'end'
					? <p className='finish'>That's it! :D</p>
					: <SendMessage
							refElement={el => this.element = el}
							disableMessage={this.props.disableInput}
							submitHandler={this.props.onSubmitMessage} />
				)}
			</Fragment>
		);
	}
}

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
			dispatch({type: 'SUBMIT_MESSAGE', value: data.target ? data.target.value : data.userField})
			dispatch({type: 'NEW_QUESTION'})
			dispatch(reset('userForm'));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Chatbot);
