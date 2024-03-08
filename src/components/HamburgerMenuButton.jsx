import React, { useState } from 'react';
import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function HamburgerMenuButton({ searchPressed }) {
	return (
		<HamburgerMenuBtn onClick={searchPressed}>
			<RxHamburgerMenu />
		</HamburgerMenuBtn>
	);
}

const HamburgerMenuBtn = styled.button`
	background-color: #2369eb;
	align-self: center;
	padding: 4px 5px 0px 5px;
	font-size: 1.5rem;
	outline: none;

	&:focus {
		outline: none;
	}
`;
