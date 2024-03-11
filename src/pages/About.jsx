import React from 'react';
import styled from 'styled-components';

export default function About() {
	return (
		<>
			<H1>About</H1>
			<Div>
				<P>
					SkyForecast is a weather application built with React and Vite. It allows users to
					check the current weather conditions for multiple cities.
				</P>
			</Div>
		</>
	);
}

const H1 = styled.h1`
	font-size: 3rem;
	font-weight: bold;
`;

const Div = styled.div`
	display: flex;
	max-width: 500px;
`;

const P = styled.p`
	font-size: 1rem;
	font-weight: 300;
	text-align: left;
	margin: auto;
`;
