import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

export default function SearchBox({ setSearch, inputRef }) {
	const { theme } = useContext(ThemeContext);

	const handleKeyUp = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			setSearch(inputRef.current.value);
		}
	};

	return (
		<StyledSearchBox
			theme={theme}
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
	border-radius: 8px;
	border-color: #2369eb;
	color: grey;
	background-color: ${(props) => props.theme.backgroundColor};
`;
