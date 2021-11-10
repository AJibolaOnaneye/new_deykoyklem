import React, { useState } from 'react'
import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../constants'
import Logo from './Logo';
import HamburgerButton from './HamburgerButton'
import NavLinks from './NavLinks'


const Navbar = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <Wrapper>
            <Logo />
            <HamburgerBtnWrapper>
				<HamburgerButton
					expanded={expanded}
					setExpanded={setExpanded}
				/>
			</HamburgerBtnWrapper>
			<NavLinks
				variant="header"
				expanded={expanded}
				setExpanded={setExpanded}
			/>
        </Wrapper>
    )
}

const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	height: 90px;

	@media ${BREAKPOINTS.tablet} {
		
		height: 113px;
	}
`;

const HamburgerBtnWrapper = styled.div`
	// Put HamburgerButton before NavLinks in markup so that it would be tabbed to
	// before the NavLinks. To position the HamburgerButton visually all the way
	// on right side of screen, had to give it a flexbox order.
	order: 3;

	// @media ${BREAKPOINTS.tablet} {
	// 	display: flex;
	// }
	@media ${BREAKPOINTS.laptop} {
		display: none;
	}
`;

export default Navbar
