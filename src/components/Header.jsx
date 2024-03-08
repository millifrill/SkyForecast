import React from 'react';
import SearchBtn from './SearchButton';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import HamburgerMenuButton from './HamburgerMenuButton';

export default function Header({ search, setSearch, searchPressed, inputRef }) {
	return (
		<HeaderContainer>
			<Div>
				<HamburgerMenuButton />
				<H1>SkyForecast</H1>
			</Div>
			<SearchContainer>
				<SearchBox setSearch={setSearch} inputRef={inputRef} />
				<SearchBtn search={search} searchPressed={searchPressed} />
			</SearchContainer>
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
	@media (min-width: 699px) {
		padding: 20px;
		gap: 20px;
	}
`;

const Div = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

const H1 = styled.h1`
	font-size: 1.6rem;
	font-weight: bold;
	margin-left: 10px;
	@media (max-width: 499px) {
		display: none;
	}
`;

const SearchContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	width: 100%;
	@media (min-width: 1399px) {
		width: 40%;
	}
`;
