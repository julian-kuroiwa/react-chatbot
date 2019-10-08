import styled from 'styled-components';

export const MessageListContainer = styled.div`
	align-content: center;
	align-items: center;
	flex-direction: ${props => props.user ? 'row-reverse' : 'row'};
	display: flex;
	margin-bottom: 20px;
`;

export const MessageListContainerOptions = styled.div`
	display: flex;

	label:not(:last-child) {
		margin-right: 10px;
	}
`;
