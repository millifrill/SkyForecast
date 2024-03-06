import React from 'react';
import SearchBtn from './SearchButton';
import styled from 'styled-components';
import SearchBox from './SearchBox';

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
`;

const H1 = styled.h1`
	font-size: 1.6rem;
	font-weight: bold;
	margin-left: 10px;

	@media (max-width: 430px) {
		display: none;
	}
`;

export default function Header() {
	return (
		<HeaderContainer>
			<H1>SkyForecast</H1>
			<SearchBox />
			<SearchBtn />
		</HeaderContainer>
	);
}
