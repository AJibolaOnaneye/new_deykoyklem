import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONT_SIZES, BREAKPOINTS } from '../constants';


function ServiceCard({ variant, img, alt, heading, tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9 }) {
	let Component;
	if (variant === 'collection') {
		Component = CollectionCard;
	} else if (variant === 'choose') {
		Component = ChooseCard;
	} else {
		throw new Error(`Unrecognized Card variant: ${variant}`);
	}
	return (
    <Component>
      <Image src={img} alt={alt} />
      <TextWrap>
        <Heading>{heading}</Heading>
        <List>
          <ListWrapper>
            <li> {tech1} </li>
            <li> {tech2} </li>
            <li> {tech3} </li>
            <li> {tech4} </li>
            <li> {tech5} </li>
            <li> {tech6} </li>
            <li> {tech7} </li>
            <li> {tech8} </li>
            <li> {tech9} </li>
          </ListWrapper>
        </List>
      </TextWrap>
    </Component>
  );
}

const BaseCard = styled.div`
	text-align: center;
	display: grid;

	@media ${BREAKPOINTS.tablet} {
		text-align: left;
	}

	@media ${BREAKPOINTS.laptop} {
		text-align: left;
	}
`;

const CollectionCard = styled(BaseCard)`
	color: ${COLORS.grey[700]};
	gap: 24px;
    justify-content: center;

	@media ${BREAKPOINTS.tablet} {
		grid-template-columns: 256px auto;
		gap: 36px;
        align-items: center;
	}

    @media ${BREAKPOINTS.laptop} {
		grid-template-columns: auto;
	}
`;

const ChooseCard = styled(BaseCard)`
color: ${COLORS.black[1000]};
background-color: ${COLORS.grey[100]};
gap: 56px;
    margin-bottom: 2rem;
	border-radius: 10px;
	font-size: ${FONT_SIZES.xs};
	line-height: 1.625;
	// box-shadow: 0px 4px 4px ${COLORS.grey[300]};
    // width: 356px;

	@media ${BREAKPOINTS.tablet} {
		grid-template-columns: 156px auto;
		gap: 36px;
		

	}

    @media ${BREAKPOINTS.laptop} {
		// grid-template-columns: auto;
        grid-template-rows: auto;
    
     
	}
`;

const Image = styled.img`
	margin: auto;
    width: 100%;
    height: 300px;
		@media ${BREAKPOINTS.tablet} {
			max-width: 100%;
width: 30rem;
// height: 25rem;
object-fit: fill;
		}

        @media ${BREAKPOINTS.laptop} {
            width: 100%;
            height: 256px;
        }

`;

const TextWrap = styled.div`
margin-left: 1rem;
margin-top: -10px;
// width: 300px;

@media ${BREAKPOINTS.tablet} {
    // margin-left: 1rem;
    margin-top: 25px;
}

@media ${BREAKPOINTS.laptop} {
    margin-left: 1rem;
    margin-top: 50px;
    margin-bottom: 15px;
}
`;

const Heading = styled.h3`
	font-size: ${FONT_SIZES.m};
	line-height: 1.33;
    text-align: center;



	${ChooseCard} & {
		margin-bottom: 24px;

		@media ${BREAKPOINTS.tablet} {
			margin-bottom: 16px;
            // margin-top: -25px
		}
        @media ${BREAKPOINTS.laptop} {
            margin-left: -15rem;
         
        }
	}
`;

const List = styled.ul`
columns: 1;
-webkit-columns: 1;
-moz-columns: 1;


@media ${BREAKPOINTS.tablet} {
    columns: 2;
-webkit-columns: 2;
-moz-columns: 2;
}
@media ${BREAKPOINTS.laptop} {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
 
}
`;
const ListWrapper = styled.div`

margin: 10px 30px;
// flex-direction: column;
// justify: content: space-around;

@media ${BREAKPOINTS.laptop} {
    margin: 10px 10px;
}
`;



export default ServiceCard;
