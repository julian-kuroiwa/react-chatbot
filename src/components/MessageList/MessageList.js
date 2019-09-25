import React from 'react';

import classes from './MessageList.module.css';

import MessageListContainer from './MessageListContainer/MessageListContainer';

const messageList = props => {
	let messages = props.messages.map((element, index) => {
		return <MessageListContainer
						key={index}
						user={element.user}
						text={element.message}
						options={element.options}
						optionHandler={props.optionHandler} />
	});

	return <div className={classes.MessageList}>
					{messages}
				</div>
};

export default messageList;
