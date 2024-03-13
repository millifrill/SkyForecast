import React from 'react';
import styled from 'styled-components';

export default function SearchBox({ setSearch, inputRef }) {
	const handleKeyUp = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			setSearch(inputRef.current.value);
		}
	};

	return (
		<StyledSearchBox
			type='text'
			placeholder='Enter city/town...'
			onChange={(e) => setSearch(e.target.value)}
			onKeyUp={handleKeyUp}
			ref={inputRef}
		/>
	);
}

const StyledSearchBox = styled.input`
	align-self: center;
	outline-style: none;
	padding-left: 10px;
	font-size: 1rem;
	height: 36px;
	width: 100%;
	border-color: #2369eb;
	border-radius: 8px;
`;
