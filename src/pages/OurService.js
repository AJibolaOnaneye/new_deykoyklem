import React from 'react'
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

import { pageAnimation } from '../animations';

import { ourService} from '../data';
import {  BREAKPOINTS, FONT_SIZES } from '../constants';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

const OurService = () => {
    return (

        <motion.main
			variants={pageAnimation}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
            <Hero
				variant="ourservice"
				title="Service"
			/>
        <MainWrapper>
         <Intro>
            <Heading>Let's meet your needs</Heading>
            <p>We offer and diligently carry out essential surveys and construction related projects </p>
           
            </Intro>
            <CardsWrapper>
				{ourService.map((item, i) => (
					<ServiceCard
						key={i}
						variant="choose"
						img={item.image}
						alt={item.alt}
						heading={item.heading}
						tech1={item.tech1}
						tech2={item.tech2}
						tech3={item.tech3}
						tech4={item.tech4}
						tech5={item.tech5}
						tech6={item.tech6}
						tech7={item.tech7}
						tech8={item.tech8}
						tech9={item.tech9}
					/>
				))}
			</CardsWrapper>
        </MainWrapper>
        </motion.main>
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

const CardsWrapper = styled.div`
  display: grid;
  gap: 24px;
 justify-content: center;
 padding: 5px 10px;
 
  @media ${BREAKPOINTS.tablet} {
    grid-template-columns: repeat(1, 1fr);
    display: grid;
    padding: 5px 20px;
  }
  @media ${BREAKPOINTS.laptop} {
    grid-template-columns: repeat(1, 1fr);
    // padding: 5px 30px;
  }

  @media ${BREAKPOINTS.laptop} {
    gap: 30px;
  }
`;

export default OurService
