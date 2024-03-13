import React, { useContext } from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import Switch from './Switch';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
	const { theme } = useContext(ThemeContext);

	return (
		<HeaderContainer theme={theme}>
			<Div>
				<NavMenu />
				<H1 theme={theme}>SkyForecast</H1>
			</Div>
			<Div>
				<Switch />
			</Div>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 10px;
	border-bottom: 1px solid black;
	background-color: ${(props) => props.theme.backgroundColor};
`;

const Div = styled.div`
	display: flex;
`;

const H1 = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	margin-left: 10px;
	line-height: 10px;
	padding: 0;
	color: ${(props) => props.theme.color};
`;
