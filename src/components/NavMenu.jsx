import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from './Hamburger';

export default function NavMenu() {
	const [menuOpen, setMenuOpen] = useState(false);

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
			<NavMenuContainer open={menuOpen}>
				<NavItem>
					<NavLink>Theme</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/' onClick={closeMenu}>
						Weather
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/about' onClick={closeMenu}>
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
	display: ${(props) => (props.open ? 'flex' : 'none')};
	flex-direction: column;
	background-color: #181818;
	position: absolute;
	top: 60px;
	left: 0px;
	width: 200px;
	height: 100vh;
	padding: 20px;
	z-index: 1;
`;

const NavItem = styled.div`
	margin: 25px 0 0 50px;
	align-self: flex-start;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: white;
	cursor: pointer;
	font-size: 1.2rem;
	margin-top: 50px;

	&:hover {
		text-decoration: underline;
		color: #2369eb;
	}
`;
