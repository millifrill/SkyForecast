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
	padding: 5px 5px 5px 10px;
	font-size: 1rem;
	height: 28px;
	width: 100%;
	border-radius: 8px;
`;
