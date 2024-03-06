import React from 'react';
import styled from 'styled-components';

const Search = styled.input`
	align-self: center;
	padding: 5px 6px 1px 6px;
	font-size: 1rem;
	outline: none;
	height: 28px;
	width: 80%;
`;

export default function SearchBox() {
	return <Search type='text' placeholder='Enter city/town...' />;
}
