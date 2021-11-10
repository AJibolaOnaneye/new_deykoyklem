import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import {  BREAKPOINTS, FONT_SIZES } from "../constants";
import vision from "../assets/visionState.jpg";
import Qpolicy from "../assets/quality.jpg";
import Spacer from "./Spacer";
import Button from "./Button";

const About = (props) => {

  const history = useHistory()

  return (
    <BaseWrapper>
      <Intro>
        <Heading>ABOUT US</Heading>
        <p>
          <b>Deykoyklem Nigeria Enterprises </b> is a surveying firm established
          to service the geoinformatics data need and management in Nigeria
        </p>
      </Intro>

      <AboutCard>
        <Image src={vision} alt="vision_statement" />
        <Descript>
          <SubHeading>Vision Statement</SubHeading>
          <Paragraph>
            The vision of the founding partners of the company, having acquited
            extensive and varied profssional exposure in the Civil Service, Oil
            Industry and Private practice Was to establish a company that would
            provide services in the areas of Spatial Data Acquisition,
            Processing, Analyss, Interpretation and Management in the following
            key areas:
            <b>
              {" "}
              Surveying & Mapping, Civil Engineering Works, Geotechnical
              Services, GIS
            </b>{" "}
            and <b> Remote Sensing Applications</b>.
          </Paragraph>
        </Descript>
      </AboutCard>
      <Spacer size={40} desktopAndUp={136} />
      <AboutCard>
        <Image src={Qpolicy} alt="quality_policy" />
        <Descript1>
          <SubHeading>Our Quality Policy</SubHeading>
          <p>
            Our reputation is based upon the quality of our products, the
            intergrity of our staff, and the timeliness of our delivery. We
            therefore focus on the specific needs of every client and project,
            committing the technical and personanel resources needed to get each
            job completed - completely, and on time. We use the most modern
            technology available to complete each assignment, while upholding
            the highest standards of professionalism to both our business and
            industries we serve. We take pride in providing our clients with
            quality products and superior service, on time, and to their
            specific format.
          </p>
        </Descript1>
      </AboutCard>
      <Spacer size={40} desktopAndUp={200} />
      <Button onClick={() => history.push("/partners")}>Our Team</Button>
    </BaseWrapper>
  );
};

const BaseWrapper = styled.div`
text-align: center;
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
font-size: ${FONT_SIZES.l};
line-height: 1.5;
  margin-bottom: 24px;
  text-align: center;

  @media ${BREAKPOINTS.tablet} {
    font-size: ${FONT_SIZES.l};
    line-height: 1.5;
  }
`;

const Paragraph = styled.p`
	opacity: 80%;
`;

const AboutCard = styled.div`
  display: grid;

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



const SubHeading = styled.h3`
  font-size: 24px;
  line-height: 1;
  margin: 35px 0px 20px;
  text-align: center;

  @media ${BREAKPOINTS.tablet} {
    font-size: ${FONT_SIZES.m};
    line-height: 1.5;
  }
`;

const Descript = styled.div`
  // padding: 100px ;
  text-align: justify;
  @media ${BREAKPOINTS.tablet} {
    padding: 10px;
  }
  @media ${BREAKPOINTS.laptop} {
    padding: 5vw;
  }
`;
const Descript1 = styled.div`
  // padding: 100px ;
  text-align: justify;
  @media ${BREAKPOINTS.tablet} {
    padding: 10px;
  }
  @media ${BREAKPOINTS.laptop} {
    padding: 5vw;
    grid-column-start: 1;
    grid-row-start: 1;
  }
`;

const Image = styled.img`
  margin: auto;
  border-radius: 8px;
  @media ${BREAKPOINTS.tablet} {
    width: 50vw;
  }
  @media ${BREAKPOINTS.laptop} {
    width: 85%;
  }
`;

export default About;
