import questions from '../data/questions';
import * as actionTypes from './actions';

const initialState = {
	answers: {},
	messages: [{
		message: questions[0].question,
		...(questions[0].options ? {options: questions[0].options} : {}),
	}],
	counter: 0,
	disableInput: false,
	currentQuestion: questions[0].id,
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.SUBMIT_MESSAGE:
			return {
				...state,
				answers: {
					...state.answers,
					...{
						[questions[state.counter].id]: action.value
					}
				},
				messages: [
					...state.messages,
					...[{message: action.value, user: true}]
				],
				counter: state.counter + 1,
			}
		case actionTypes.NEW_QUESTION:
			return {
				...state,
				messages: [
					...state.messages,
					...[{ message: questions[state.counter].question, options: questions[state.counter].options }]
					],
					disableInput: questions[state.counter].disableInput ? questions[state.counter].disableInput : false,
			}
		default:
			return state;
	}
}

export default reducer;
