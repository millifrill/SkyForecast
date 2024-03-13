import React, { useContext } from 'react';
import styled from 'styled-components';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { ThemeContext } from '../context/ThemeContext';

export default function Switch() {
	const { toggleTheme, isDark } = useContext(ThemeContext);
	const handleToggle = () => {
		toggleTheme();
	};
	return (
		<SwitchLabel>
			<SwitchInput type='checkbox' onClick={handleToggle} />
			<SwitchSlider isdark={isDark ? 'true' : 'false'}>
				{isDark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}{' '}
			</SwitchSlider>
		</SwitchLabel>
	);
}

const SwitchLabel = styled.label`
	display: flex;
	align-self: center;
	align-items: center;
	justify-content: space-between;
	position: relative;
	width: 60px;
	height: 40px;
	border-radius: 8px;
	border: 2px solid #2369eb;
	transition: background-color 0.3s;
	cursor: pointer;
`;

const SwitchInput = styled.input`
	height: 0;
	width: 0;
	visibility: hidden;
`;

const SwitchSlider = styled.span`
	position: absolute;
	top: 1px;
	left: 1px;
	width: 38px;
	height: 38px;
	font-size: 1.6rem;
	text-align: center;
	align-items: center;
	justify-content: center;
	padding: 1px 1px 0px 1px;
	border-radius: 6px;
	transition: 0.2s;
	background: #2369eb;
	color: white;

	${SwitchInput}:checked + & {
		left: calc(100% - 1px);
		transform: translateX(-100%);
	}
`;
