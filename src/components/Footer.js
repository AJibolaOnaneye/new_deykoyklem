import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, BREAKPOINTS } from '../constants';
import Logo from './LogoFooter';
// import SocialIcons from './SocialIcons';
import Spacer from './Spacer';
import { IoLocationSharp } from 'react-icons/io5'
import { BsHeadset,BsClockFill } from 'react-icons/bs'

function Footer() {
	return (
		<Wrapper>
			<Logo/>
			{/* <p>Start your journey to a fulfilled survey service.</p> */}
			<Spacer
				size={48}
				tabletAndUp={32}
				laptopAndUp={0}
				desktopAndUp={102}
			/>
			{/* <NavLinks /> */}
			<ListWrapper>
				<List>
					<li> <ListIcons> <IoLocationSharp/> </ListIcons>&nbsp; 1A, Unity Road, Off Toyin Street, Ikeja, Lagos State.</li>
					<li> <ListIcons> <BsHeadset/> </ListIcons> &nbsp; +234(0) 802 301 0656,<span></span> +234(0) 805 701 3265</li>
					<li><ListIcons> <BsClockFill/> </ListIcons>&nbsp; 8:00 am - 17:00 pm, Monday - Friday</li>
				</List>
			</ListWrapper>
			
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	background-color: ${COLORS.greyBlue};
	color: ${COLORS.lightCream[300]};
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	

	@media ${BREAKPOINTS.tablet} {
		display: flex;
		
		// justify-content: space-between;
	}

	@media ${BREAKPOINTS.laptop} {
		flex-direction: row;
		padding: 47px 85px;
		justify-content: space-between;
	}

	@media ${BREAKPOINTS.desktop} {
		justify-content: space-evenly;
		padding: 9px 85px;
	}
`;


const ListWrapper = styled.div`
padding: 30px 0px;
`;

const List = styled.ul`
display: grid;
gap: 10px;
width: 100%;
text-align: left;
font-weight: 700;
`;

const ListIcons = styled.span`
color:#0477B3;
font-size:20px;
`;

// const ListItem = styled.li``;

export default Footer;
