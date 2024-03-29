import React, { useContext } from 'react';
import styled from 'styled-components';
import SearchBox from './../components/SearchBox';
import SearchButton from './../components/SearchButton';
import { ThemeContext } from '../context/ThemeContext';

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
	const { theme } = useContext(ThemeContext);

	return (
		<Container theme={theme}>
			<SearchContainer>
				<SearchBox setSearch={setSearch} inputRef={inputRef} />
				<SearchButton search={search} searchPressed={searchPressed} />
			</SearchContainer>
			{fetchDone ? (
				<WeatherdataContainer theme={theme}>
					<H1 theme={theme}>{city}</H1>
					<Icon src={iconUrl} alt='Weather Icon' />
					<P theme={theme}>{sky}</P>
					<P theme={theme}>{temp} °C</P>
					<P theme={theme}>{wind} m/s</P>
				</WeatherdataContainer>
			) : (
				<WelcomeOrErrorContainer theme={theme}>
					<WelcomeOrErrorText theme={theme}>
						{error || 'Please search for a location to display weather information.'}
					</WelcomeOrErrorText>
				</WelcomeOrErrorContainer>
			)}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 300px;
	max-width: 500px;
	margin: 80px auto 30px;
	border-radius: 8px;
`;

const WeatherdataContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 350px;
	max-width: 600px;
	padding: 50px 5px;
	border-radius: 8px;
	background-color: ${(props) => props.theme.backgroundColor};
`;

const SearchContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2px;
	width: 100%;
	margin-bottom: 10px;
`;

const H1 = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 5px;
	color: ${(props) => props.theme.color};
`;

const Icon = styled.img`
	width: 100px;
	height: 100px;
`;

const P = styled.p`
	font-size: 1.6rem;
	font-weight: 400;
	margin-bottom: 15px;
	color: ${(props) => props.theme.color};
`;

const WelcomeOrErrorText = styled.p`
	font-size: 1.4rem;
	font-weight: 400;
	color: ${(props) => props.theme.color};
`;
const WelcomeOrErrorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 600px;
	padding: 0px 80px 10px 80px;
	border-radius: 8px;
	background-color: ${(props) => props.theme.backgroundColor};
`;
