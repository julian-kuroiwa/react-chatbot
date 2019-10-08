import styled from 'styled-components';

export const Avatar = styled.div`
	background-color: ${props => props.user ? 'gold' : 'cyan'};
	height: 60px;
	width: 60px;
`;
