import React from 'react';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

import { pageAnimation } from '../animations';
import Hero from '../components/Hero';
import Headquarters from '../components/Headquarters';
import Map from '../components/Map';
import Spacer from '../components/Spacer';
import Form from '../components/Form';
import { BREAKPOINTS, FONT_SIZES, COLORS } from '../constants';

const Contact = () => {
    return (
      <div>
        <motion.main
          variants={pageAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Hero variant="contact" title="Contact Us" />
          <Spacer size={120} tabletAndUp={144} desktopAndUp={168} />
          <Wrapper>
            <CardsWrapper>
              <Headquarters />
              <Form />
            </CardsWrapper>
          </Wrapper>
          <Spacer size={120} tabletAndUp={144} desktopAndUp={138} />
          <Map/>
          <Spacer size={120} tabletAndUp={144} desktopAndUp={168} />
        </motion.main>
      </div>
    );
}

const Wrapper = styled.section`
  padding: 24px;
  padding-top: 64px;
  text-align: center;
  position: relative;
  background-color: ${COLORS.grey[100]};
  border-radius: 10px;
  width: 100%;
  height: 1100px;
  


  @media ${BREAKPOINTS.tablet} {
    padding: 58px;
    padding-top: 56px;
    height: 800px;
  }

  @media ${BREAKPOINTS.desktop} {
    padding: 55px;
    padding-top: 100px;
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
      height: 800px;
    }

    @media ${BREAKPOINTS.desktop} {
      height: 800px;
    }
  }
`;

const CardsWrapper = styled.div`
display: grid;
gap: 24px;
justify-content: center;


@media ${BREAKPOINTS.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

@media ${BREAKPOINTS.desktop} {
    grid-template-columns: repeat(2, 1fr);
}
`;

export default Contact
