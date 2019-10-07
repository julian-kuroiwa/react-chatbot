import React from 'react';

import * as S from './styled';

const messageList = props => (
	<S.MessageList>
		{props.children}
	</S.MessageList>
)

export default messageList;
