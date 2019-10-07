import reducer from './reducer';
import * as actionTypes from './actions';
import questions from '../data/questions';

describe('reducer', () => {
	it('should return initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			answers: {},
			messages: [{
				message: questions[0].question,
				...(questions[0].options ? {options: questions[0].options} : {}),
			}],
			counter: 0,
			disableInput: false,
			currentQuestion: questions[0].id,
		})
	});

	it('should store message', () => {
		expect(reducer({
			answers: {},
			messages: [{
				message: questions[0].question,
				...(questions[0].options ? {options: questions[0].options} : {}),
			},],
			counter: 0,
			disableInput: false,
		}, {
			type: actionTypes.SUBMIT_MESSAGE,
			value: 'Teste'
		})).toEqual({
			answers: {
				name: 'Teste',
			},
			messages: [{
				message: questions[0].question,
				...(questions[0].options ? {options: questions[0].options} : {}),
			},
		 {message: 'Teste', user: true}],
			counter: 1,
			disableInput: false,
		})
	});
});
