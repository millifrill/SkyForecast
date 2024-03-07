import React from 'react';
import styled from 'styled-components';

export default function WeatherContainer({ fetchDone, error, city, sky, temp, wind }) {
	return (
		<Container>
			{fetchDone ? (
				<>
					<Span>{city}</Span>
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
