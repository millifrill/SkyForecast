import React from 'react';
import styled from 'styled-components';
import { IoSearchSharp } from 'react-icons/io5';

const SearchBtn = styled.button`
	background-color: #2369eb;
	align-self: center;
	padding: 5px 5px 1px 5px;
	font-size: 1.5rem;
	outline: none;
`;

export default function SearchButton() {
	return (
		<SearchBtn>
			<IoSearchSharp />
		</SearchBtn>
	);
}
