import React from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';

export default function Header() {
	return (
		<HeaderContainer>
			<NavMenu />
			<H1>SkyForecast</H1>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 10px;
	background-color: #000;
`;

const H1 = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	margin-left: 10px;
	line-height: 10px;
	padding: 0;
	color: white;
`;
