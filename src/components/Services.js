import React from "react";
import styled from "styled-components/macro";

import { whyChoose } from "../data";
import { COLORS, BREAKPOINTS, FONT_SIZES } from "../constants";
import Card from "./Card";
import Button from "./Button";
import Spacer from "./Spacer";
import { useHistory } from "react-router-dom";



const Services = (props) => {

  const history = useHistory();

  return (
    <Wrapper>
      <Intro>
        <Heading>OUR SERVICES</Heading>
        <p>
          WE OFFER AND DILIGENTLY CARRY OUT VARIOUS ESSENTIAL SURVEY AND
          CONSTRUCTION RELATED PROJECTS
        </p>
      </Intro>

      <CardsWrapper>
        {whyChoose.map((item, i) => (
          <Card
            key={i}
            variant="choose"
            img={item.image}
            alt={item.alt}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </CardsWrapper>
      <Spacer size={40} desktopAndUp={58} />
      <Button onClick={() => history.push("/ourservice")}>Find More</Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 24px;
  padding-top: 64px;
  text-align: center;
  position: relative;
  background-color: ${COLORS.grey[100]};
  border-radius: 10px;
  width: 100%;

  @media ${BREAKPOINTS.tablet} {
    padding: 58px;
    padding-top: 56px;
  }

  @media ${BREAKPOINTS.desktop} {
    padding: 85px;
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

const Heading = styled.h2`
  font-size: 20px;
  line-height: 1;
  margin-bottom: 24px;

  @media ${BREAKPOINTS.tablet} {
    font-size: ${FONT_SIZES.l};
    line-height: 1.5;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  gap: 24px;


  @media ${BREAKPOINTS.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${BREAKPOINTS.laptop} {
    gap: 30px;
  }
`;

export default Services;
