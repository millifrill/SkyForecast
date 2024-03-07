import React, { useState } from 'react';
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
			<div>
				<p>{weather.name}</p>
				<p>{weather.weather && weather.weather[0].main}</p>
				<p>{weather.main && weather.main.temp} °C</p>
				<p>{weather.wind && weather.wind.speed} m/s</p>
			</div>
		</>
	);
}

const H1 = styled.h1`
	font-size: 1.6rem;
	font-weight: bold;
	margin-left: 10px;

	@media (max-width: 430px) {
		display: none;
	}
`;
