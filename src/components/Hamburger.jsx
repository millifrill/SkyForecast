import React from 'react';
import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Hamburger({ toggle }) {
	return (
		<HamburgerMenuBtn onClick={toggle}>
			<RxHamburgerMenu />
		</HamburgerMenuBtn>
	);
}

const HamburgerMenuBtn = styled.button`
	background-color: #2369eb;
	align-self: center;
	padding: 4px 5px 0px 5px;
	margin-top: 2px;
	font-size: 1.5rem;

	outline: none;

	&:focus {
		outline: none;
	}
`;
