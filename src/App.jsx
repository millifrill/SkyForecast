import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';

const api = {
	key: '6693a0bd2ceaf6280a39581ee88730dd',
	base: 'https://api.openweathermap.org/data/2.5/',
};

export default function App() {
	const [search, setSearch] = useState('');
	const [weather, setWeather] = useState({});
	const [fetchDone, setFetchDone] = useState(false);

	const searchPressed = () => {
		fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setWeather(data);
				setFetchDone(true);
			})
			.catch((error) => {
				console.error('Error fetching weather data:', error);
			});
	};

	return (
		<>
			<Header setSearch={setSearch} search={search} searchPressed={searchPressed} />
			<Container>
				{fetchDone ? (
					<>
						<Span>{weather.name}</Span>
						<Span>{weather.weather && weather.weather[0].main}</Span>
						<Span>{weather.main && weather.main.temp.toFixed(1)} °C</Span>
						<Span>{weather.wind && weather.wind.speed} m/s</Span>
					</>
				) : (
					<WelcomeText>
						Please search for a location to display weather information.
					</WelcomeText>
				)}
			</Container>
		</>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Span = styled.span`
	font-size: 1.6rem;
	font-weight: 300;
`;

const WelcomeText = styled.p`
	font-size: 1.6rem;
	font-weight: 400;
`;
