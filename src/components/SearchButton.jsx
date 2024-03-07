import React, { useState } from 'react';
import styled from 'styled-components';
import { IoSearchSharp } from 'react-icons/io5';

export default function SearchButton({ searchPressed }) {
	return (
		<SearchBtn onClick={searchPressed}>
			<IoSearchSharp />
		</SearchBtn>
	);
}

const SearchBtn = styled.button`
	background-color: #2369eb;
	align-self: center;
	padding: 4px 5px 0px 5px;
	font-size: 1.5rem;
	outline: none;
`;
