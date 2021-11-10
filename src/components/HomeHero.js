import React from 'react'
import styled from 'styled-components/macro';
import { FONT_SIZES, BREAKPOINTS } from '../constants';
import Button from './Button';
import homeHeroImg from '../assets/survey_illustration.svg'
import Spacer from '../components/Spacer';
import { useHistory } from 'react-router-dom';

const HomeHero = (props) => {


	const history = useHistory();

	const routeChange = () =>{ 
		let path = `/contact`; 
		history.push(path);
	  }

    return (
        <div>
            <CardsWrapper>
                <NameWrapper>
                <Heading>DEYKOYKLEM NIG. ENT.</Heading>
                <p>WE MEASURE YOUR DREAMS ACCURATELY</p>
                <Spacer size={40} desktopAndUp={58} />
                <Button onClick={(routeChange)}>
                Make an Appointment
            </Button>
			{/* <Button onClick={(routeChange) => props.history.push('/plan')}>
			Make an Appointment
            </Button> */}
                </NameWrapper>
            <Image src={homeHeroImg} alt='heroimage' />
            </CardsWrapper>
			
        </div>
    )
}


// const Wrapper = styled.section`
// 	padding: 0 22.5px;
// 	text-align: center;

// 	@media ${BREAKPOINTS.tablet} {
// 		padding: 0;
// 	}

// 	@media ${BREAKPOINTS.desktop} {
// 		padding: 0 84.5px;
// 	}
// `;

const NameWrapper = styled.div`
text-align: center;
padding-top: 5rem;

@media ${BREAKPOINTS.tablet} {
	padding-top: 10rem;
}

`
const Heading = styled.h1`
font-size: ${FONT_SIZES.m};
		margin-bottom: 24px;
        text-align: center;

		@media ${BREAKPOINTS.tablet} {
			font-size: ${FONT_SIZES.xl};
		}

		@media ${BREAKPOINTS.desktop} {
			font-size: ${FONT_SIZES.xl};
			margin-bottom: 32px;
		}
`

const CardsWrapper = styled.div`
	display: grid;
	// gap: 10px;

	@media ${BREAKPOINTS.tablet} {
		gap: 32px;
		padding: 0 58px;
	}

	@media ${BREAKPOINTS.laptop} {
		gap: 50px;
		align-items: start;
		padding: 0;
		grid-template-columns: repeat(2, 1fr);
	}
`;

const Image =  styled.img`
display: none;

@media ${BREAKPOINTS.laptop} {
	display: block;
}
`

export default HomeHero
