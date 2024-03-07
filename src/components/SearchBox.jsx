import React from 'react';
import styled from 'styled-components';

export default function SearchBox({ setSearch, inputRef }) {
	return (
		<StyledSearchBox
			type='text'
			placeholder='Enter city/town...'
			onChange={(e) => setSearch(e.target.value)}
			ref={inputRef}
		/>
	);
}

const StyledSearchBox = styled.input`
	align-self: center;
	padding: 5px 6px 1px 6px;
	font-size: 1rem;
	outline: none;
	height: 28px;
	width: 80%;
	border-radius: 8px;
`;
