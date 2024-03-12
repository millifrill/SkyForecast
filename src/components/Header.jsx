import React from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import ToggleButton from './Switch';

export default function Header() {
	return (
		<HeaderContainer>
			<Div>
				<NavMenu />
				<H1>SkyForecast</H1>
			</Div>
			<Div>
				<ToggleButton />
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
	background-color: #181818;
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
	color: white;
`;
