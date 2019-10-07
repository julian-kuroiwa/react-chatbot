import React from 'react';
import { storiesOf } from '@storybook/react';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import MessageList from './MessageList';

export const messageList = {
	messages: [
		{
			message: 'teste',
		},
		{
			message: 'alo alo',
			user: true
		}
	]
};

const rootReducer = combineReducers({
	data: messageList,
	form: formReducer
});

const store = createStore(rootReducer);

storiesOf('MessageList', module)
	.addDecorator(story => <Provider store={store}>{story()}</Provider>)
	.add('teste', <MessageList {...messageList} />);
