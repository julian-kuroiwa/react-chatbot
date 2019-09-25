import React, {Component, Fragment} from 'react';

import MessageList from '../components/MessageList/MessageList';
import SendMessage from '../components/SendMessage/SendMessage';

import questions from '../data/questions';

class Chatbot extends Component {
  constructor(props) {
		super(props);

		this.state = {
			answers: {},
			messages: [{
				message: questions[0].question,
				...(questions[0].options ? {options: questions[0].options} : {}),
			}],
			counter: 0,
			disableInput: false,
			currentQuestion: questions[0].id,
		};
		this.sendForm = this.sendForm.bind(this);
	}

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

	sendForm = event => {
		event.preventDefault();

		this.setState({
			answers: {
				...this.state.answers,
				...{
					[questions[this.state.counter].id]: this.element.value
				}
			},
			messages: [
				...this.state.messages,
				...[{message: this.element.value, user: true}]
			],
			counter: this.state.counter + 1,
		});

		document.forms[0].reset();
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.counter !== this.state.counter) {

			this.setState({
				messages: [
					...this.state.messages,
					...[{ message: questions[this.state.counter].question, options: questions[this.state.counter].options }]
					],
					disableInput: questions[this.state.counter].disableInput ? questions[this.state.counter].disableInput : false,
					currentQuestion: questions[this.state.counter].id
				});

				console.log(this.state);
		}
	};

	render() {
		return (
			<Fragment>
				<MessageList 
					messages={this.state.messages} 
					optionHandler={this.optionHandle} />
				{(this.state.currentQuestion === 'end' 
					? <p className='finish'>That's it! :D</p> 
					: <SendMessage
							refElement={el => this.element = el}
							disableMessage={this.state.disableInput}
							submitHandler={this.sendForm} />
				)}
			</Fragment>
		);
	}
}

export default Chatbot;
