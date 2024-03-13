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
	padding: 4px 6px 0px 6px;
	margin-top: 2px;
	width: 40px;
	height: 40px;
	font-size: 1.5rem;
	outline: none;
	&:focus {
		outline: none;
	}
`;
