import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import WeatherContainer from './components/WeatherContainer';

const api = {
	key: '6693a0bd2ceaf6280a39581ee88730dd',
	base: 'https://api.openweathermap.org/data/2.5/',
	iconBase: 'http://openweathermap.org/img/wn/',
};

export default function App() {
	const [search, setSearch] = useState('');
	const [weather, setWeather] = useState({});
	const [fetchDone, setFetchDone] = useState(false);
	const [error, setError] = useState(null);
	const inputRef = useRef();

	const searchPressed = () => {
		fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Location not found. Please check the spelling and try again.');
				}
				return response.json();
			})
			.then((data) => {
				console.log(data); // GLÖM INTE ATT TA BORT
				setWeather(data);
				setFetchDone(true);
				inputRef.current.focus();
			})
			.catch((error) => {
				setFetchDone(false);
				setError(error.message);
			});
	};

	const iconUrl = `${api.iconBase}${weather.weather && weather.weather[0].icon}@2x.png`;
	const city = weather.name;
	const sky = weather.weather && weather.weather[0].main;
	const temp = weather.main && weather.main.temp.toFixed(1);
	const wind = weather.wind && weather.wind.speed;

	return (
		<>
			<Header
				setSearch={setSearch}
				search={search}
				searchPressed={searchPressed}
				inputRef={inputRef}
			/>
			<WeatherContainer
				fetchDone={fetchDone}
				error={error}
				iconUrl={iconUrl}
				city={city}
				sky={sky}
				temp={temp}
				wind={wind}
			/>
		</>
	);
}
