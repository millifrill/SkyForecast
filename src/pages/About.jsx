import React from 'react';
import styled from 'styled-components';

export default function About() {
	return (
		<Container>
			<H1>About</H1>
			<Div>
				<P>
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
	max-width: 600px;
	margin: 80px auto;
	gap: 10px;
`;

const H1 = styled.h1`
	font-size: 1.5rem;
	font-weight: 500;
	text-align: left;
`;

const Div = styled.div`
	display: flex;
`;

const P = styled.p`
	font-size: 1.1rem;
	font-weight: 300;
	text-align: left;
	margin: auto;
`;
