const questions = [
	{
		id: 'name',
		question: 'What\'s your name?',
	},
	{
		id: 'age',
		question: 'How old are you?',
		options: [
			{
				name: 'age',
				value: 30,
				label: '30',
				id: 'teste-1'
			},
			{
				name: 'age',
				value: 50,
				label: '50',
				id: 'teste-2'
			},
			{
				name: 'age',
				value: 70,
				label: '70',
				id: 'teste-3'
			}
		],
		disableInput: true,
	},
	{
		id: 'place',
		question: 'Where do you live?',
	},
	{
		id: 'end',
		question: 'Thanks! We\'ll get in touch with you soon! :)',
		disableInput: true
	},
];

export default questions;
