import React from 'react';
import styled from 'styled-components';

export default function Weather({ fetchDone, error, iconUrl, city, sky, temp, wind }) {
	return (
		<Container>
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
	gap: 20px;
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
	font-size: 1.5rem;
	font-weight: 400;
`;
