import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

export default function About() {
	const { theme } = useContext(ThemeContext);

	return (
		<Container theme={theme}>
			<H1 theme={theme}>About</H1>
			<Div>
				<P theme={theme}>
					SkyForecast is a weather application built with React and Vite. It allows users to
					check the current weather conditions for any city in the world.
				</P>
			</Div>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 300px;
	max-width: 500px;
	margin: 50px auto 30px;
	border-radius: 8px;
	padding: 20px;
	background-color: ${(props) => props.theme.backgroundColor};
`;

const H1 = styled.h1`
	font-size: 1.5rem;
	font-weight: 500;
	text-align: left;
	padding: 0 10px;
	color: ${(props) => props.theme.color};
`;

const Div = styled.div`
	display: flex;
`;

const P = styled.p`
	font-size: 1.1rem;
	text-align: left;
	margin: auto;
	padding: 0 10px;
	color: ${(props) => props.theme.color};
`;
