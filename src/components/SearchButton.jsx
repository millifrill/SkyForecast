import React from 'react';
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
	padding: 5px 6px 0px 8px;
	font-size: 1.6rem;
	&:focus {
		outline: none;
	}
`;
