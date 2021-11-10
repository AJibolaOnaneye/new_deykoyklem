import React from 'react';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

import { pageAnimation } from '../animations';
import Hero from '../components/Hero';
import { BREAKPOINTS, FONT_SIZES } from '../constants';
import img1 from '../assets/project1.jpg'
import img2 from '../assets/project2.jpg'
import img3 from '../assets/project3.jpg'
import img4 from '../assets/project4.jpg'
import img5 from '../assets/project5.jpg'

const Gallery = () => {
    return (
        <motion.main
			variants={pageAnimation}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
            <Hero
				variant="gallery"
				title="Gallery"
			/>
        <MainWrapper>
            <Intro>
            <Heading>Know us through photos</Heading>
            <p>We offer and diligently carry out essential surveys and construction related projects </p>
           
            </Intro>
        <div className="grid">
  <div className="item image" style={{backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'right', width:'100%' }}></div>
  <div className="item image" style={{backgroundImage: `url(${img2})`}}></div>
  <div className="item image" style={{backgroundImage: `url(${img3})`}}></div>
  <div className="item image" style={{backgroundImage: `url(${img4})`}}></div>
  <div className="item image" style={{backgroundImage: `url(${img5})`}}></div>
 
</div>
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

export default Gallery
