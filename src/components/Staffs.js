import React from 'react'
import styled from "styled-components/macro";

import { staffs } from "../data";
import { COLORS, BREAKPOINTS, FONT_SIZES } from "../constants";
import StaffCard from './StaffCard'
import CardModal from './CardModal';
import Button from "./Button";
import Spacer from "./Spacer";

const Staffs = ({image, description, heading, qualities, showDialog, setShowDialog,},props) => {
  const getData = () => {
    
  }

    return (
        <MainWrapper>
            <Intro>
            <Heading>They are all experts</Heading>
            <p>Welcome to our team of profrssionals were we deliver optimum services</p>
            </Intro>

            <div>
                <h5>THE WHOLE TEAM</h5>
                <LineWrapper>
                    <TopLine/>
                    <BottomLine/>
                </LineWrapper>
                <Wrapper>
                {/* <CardsWrapper> */}
				{/* {staffs.map((item, i) => (
					<StaffCard
						key={i}
						variant="choose"
						image={item.image}
						alt={item.alt}
						heading={item.heading}
						description={item.description}
            // qualities={item.qualities}

					/>
				))} */}
   
<StaffCard variant='choose' />
			{/* </CardsWrapper> */}
                </Wrapper>
                
            </div>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
  padding: 24px;
  padding-top: 64px;
  text-align: center;
  position: relative;
  
  @media ${BREAKPOINTS.tablet} {
    padding: 58px;
    padding-top: 56px;
  }

  @media ${BREAKPOINTS.desktop} {
    padding: 85px;
    padding-top: 100px;
    display: inline-block;
`;

const Wrapper = styled.section`

  padding: 64px 10px ;
  // padding-top: 64px;
  text-align: center;
  // position: relative;
  background-color: ${COLORS.grey[100]};
  border-radius: 10px;
  width: 100%;

  @media ${BREAKPOINTS.tablet} {
    padding: 58px 80px;
    // padding-top: 56px;
  }
  @media ${BREAKPOINTS.laptop} {
    padding: 58px 130px;
    // padding-top: 56px;
  }

  @media ${BREAKPOINTS.desktop} {
    padding: 100px 65px 70px 63px;
  
  }

  // Dark grey background
  &:before {
    content: "";
    width: 100%;
    border-radius: 10px;

    top: 0;
    left: 0;
    z-index: -1;

    @media ${BREAKPOINTS.tablet} {
      height: 573px;
    }

    @media ${BREAKPOINTS.desktop} {
      height: 577px;
    }
  }
`;

const Intro = styled.div`
  margin-bottom: 64px;

  @media ${BREAKPOINTS.tablet} {
    max-width: 540px;
    margin: auto;
    margin-bottom: 70px;
  }

  @media ${BREAKPOINTS.tablet} {
    margin-bottom: 86px;
  }
`;

const Heading = styled.h4`
  font-size: 22px;
  line-height: 1;
  margin-bottom: 24px;

  @media ${BREAKPOINTS.tablet} {
    font-size: ${FONT_SIZES.m};
    line-height: 1.5;
  }
`;

const LineWrapper = styled.div`
margin: 25px 0px;
`;

const TopLine = styled.hr`
z-index: 1;
width: 54px;
height: 5px;
margin: auto;
background-color: ${COLORS.darkCyan};
border: none;
position: relative;
`;

const BottomLine = styled.hr`
top: -3px;
z-index: -1;
border: none;
width: 80%;
height: 1px;
margin: auto;
background-color: ${COLORS.grey[300]};

`;

const CardsWrapper = styled.div`
  display: grid;
  gap: 24px;

  @media ${BREAKPOINTS.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${BREAKPOINTS.laptop} {
    gap: 30px;
  }
`;
export default Staffs
