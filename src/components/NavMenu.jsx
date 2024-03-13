import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import { ThemeContext } from '../context/ThemeContext';

export default function NavMenu() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { theme } = useContext(ThemeContext);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<>
			<HamburgerWrapper>
				<Hamburger toggle={toggleMenu} />
			</HamburgerWrapper>
			<NavMenuContainer open={menuOpen} theme={theme}>
				<NavItem>
					<NavLink to='/' onClick={closeMenu} theme={theme}>
						Weather
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/about' onClick={closeMenu} theme={theme}>
						About
					</NavLink>
				</NavItem>
			</NavMenuContainer>
		</>
	);
}

const HamburgerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const NavMenuContainer = styled.nav`
	visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
	opacity: ${(props) => (props.open ? 1 : 0)};
	overflow: hidden;
	transition: max-height 0.3s ease, opacity 0.2s ease, visibility 0.3s ease,
		transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
	position: absolute;
	top: 62px;
	left: 0;
	width: 200px;
	height: 100vh;
	padding: 20px;
	border-top: 1px solid black;
	border-right: 1px solid black;
	background-color: ${(props) => props.theme.backgroundColor};
	z-index: 1;
`;

const NavItem = styled.div`
	margin: 25px 0 0 50px;
	align-self: flex-start;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.color};
	cursor: pointer;
	font-size: 1.2rem;
	margin-top: 50px;

	&:hover {
		text-decoration: underline;
		color: #2369eb;
	}
`;
