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

	const searchPressed = () => {
		fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setWeather(data);
			})
			.catch((error) => {
				console.error('Error fetching weather data:', error);
			});
	};

	return (
		<>
			<Header setSearch={setSearch} search={search} searchPressed={searchPressed} />
			<Container>
				<Span>{weather.name}</Span>
				<Span>{weather.weather && weather.weather[0].main}</Span>
				<Span>{weather.main && weather.main.temp} °C</Span>
				<Span>{weather.wind && weather.wind.speed} m/s</Span>
			</Container>
		</>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Span = styled.span`
	font-size: 1.6rem;
	font-weight: 400;
	margin-left: 10px;
`;
