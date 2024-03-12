import React from 'react';
import styled from 'styled-components';
import SearchBox from './../components/SearchBox';
import SearchButton from './../components/SearchButton';

export default function Weather({
	search,
	setSearch,
	searchPressed,
	inputRef,
	fetchDone,
	error,
	iconUrl,
	city,
	sky,
	temp,
	wind,
}) {
	return (
		<Container>
			<SearchContainer>
				<SearchBox setSearch={setSearch} inputRef={inputRef} />
				<SearchButton search={search} searchPressed={searchPressed} />
			</SearchContainer>
			{fetchDone ? (
				<>
					<H1>{city}</H1>
					<Icon src={iconUrl} alt='Weather Icon' />
					<Span>{sky}</Span>
					<Span>{temp} °C</Span>
					<Span>{wind} m/s</Span>
				</>
			) : (
				<WelcomeText>
					{error || 'Please search for a location to display weather information.'}
				</WelcomeText>
			)}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 600px;
	margin: 80px auto;
	gap: 20px;
`;

const SearchContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: 10px;
	width: 100%;
`;

const H1 = styled.h1`
	font-size: 3rem;
	font-weight: bold;
`;

const Icon = styled.img`
	margin: auto;
	width: 100px;
	height: 100px;
`;

const Span = styled.span`
	font-size: 1.6rem;
	font-weight: 300;
`;

const WelcomeText = styled.p`
	font-size: 1.4rem;
	font-weight: 400;
`;
