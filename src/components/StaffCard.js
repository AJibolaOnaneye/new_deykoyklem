import React, { useState, useRef } from "react";
import styled from "styled-components/macro";
import { COLORS, FONT_SIZES, BREAKPOINTS, FONTS, WEIGHTS } from "../constants";
import Modal from "./Modal";
import { staffs } from "../data";

function Card({ variant, image, alt, heading, description, qualities }, props) {
  const aRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const [tempData, setTempData] = useState(false);

  let Component;
  if (variant === "collection") {
    Component = CollectionCard;
  } else if (variant === "choose") {
    Component = ChooseCard;
  } else {
    throw new Error(`Unrecognized Card variant: ${variant}`);
  }

  const getData = (image, description, heading, qualities) => {
    setShowModal((prev) => !prev);
    let tempData = [image, description, heading, qualities];
    console.log(tempData);
    setTempData((item) => [1, ...tempData]);
  };

  return (
    <MainContainer aria-label="our team">
      {staffs.map((item, i) => (
        <Component key={i} variant>
          <Image src={item.image} alt={alt} />
          <TextWrap>
            <Heading>{item.heading}</Heading>
            <p >{item.description}</p>
          </TextWrap>

          <Button
            ref={aRef}
            onClick={() =>
              getData(
                item.image,
                item.heading,
                item.description,
                item.qualities
              )
            }
          >
            More Info
          </Button>
        </Component>
      ))}

      {/* <CardModal 
  image={image}
  heading={heading}
  description={description}
  qualities={qualities}
  showDialog={showDialog}
  setShowDialog={setShowDialog}
/> */}

      {showModal === true ? (
        <Modal
          image={tempData[1]}
          heading={tempData[2]}
          description={tempData[3]}
          qualities={tempData[4]}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : null}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  text-align: center;
  display: grid;
  gap: 24px;

  @media ${BREAKPOINTS.laptop} {
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${BREAKPOINTS.desktop} {
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BaseCard = styled.div`
  text-align: center;

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
  background-color: ${COLORS.white};
  gap: 56px;
  margin-bottom: 2rem;
  border-radius: 10px;
  overflow: hidden;
  // font-size: ${FONT_SIZES.xs};
  line-height: 1.625;
  box-shadow: 1.5px 3px 10px ${COLORS.grey[300]};

  @media ${BREAKPOINTS.laptop} {
    // grid-template-columns: 256px auto;
    // gap: 56px;
    // // padding: 41px 24px 41px 70px;
  }

  @media ${BREAKPOINTS.laptop} {
    // display: grid;
    // grid-template-columns: 2fr 1fr;
    // grid-template-rows: 72px auto;
    // padding-top: 5rem;
  }

  @media ${BREAKPOINTS.laptop} {
    // padding: 48px;
    // padding-top: 72px;
  }
`;

const Image = styled.img`
  margin: auto;
  max-width: 100%;
  width: 400px;
  height: 324px;
  object-fit: fill;
  height: 15rem;

  @media ${BREAKPOINTS.tablet} {
    max-width: 100%;
    //     height: 150px;
    object-fit: cover;
    width: 500px;
  }

  @media ${BREAKPOINTS.laptop} {
    max-width: 100%;
    width: 400px;
    height: 324px;
    object-fit: cover;
  }
`;

const TextWrap = styled.div`
  margin-top: 10px;

  @media ${BREAKPOINTS.tablet} {
    margin-left: 1rem;
    margin-top: 25px;
  }

  @media ${BREAKPOINTS.laptop} {
    // margin-left: 1rem;
    margin: 1.5rem 1.5rem;
  }
`;

const Heading = styled.h3`
  font-size: ${FONT_SIZES.m};
  line-height: 1.33;

  ${CollectionCard} & {
    margin-bottom: 16px;
  }

  ${ChooseCard} & {
    margin-bottom: 10px;

    @media ${BREAKPOINTS.tablet} {
      margin-bottom: 16px;
      // margin-top: -25px
    }
  }
`;

const Button = styled.button`
  font-family: ${FONTS.secondary};
  font-size: ${FONT_SIZES.s};
  font-weight: ${WEIGHTS.bold};
  cursor: pointer;
  background-color: ${COLORS.darkCyan};
  color: ${COLORS.lightCream[100]};
  border: none;
  margin: 0.5rem 0rem 1.5rem 0rem;
  text-align: center;
  border-radius: 6px;
  padding: 16px 32px;
  // width: ${(p) => (p.width ? `${p.width}px` : "auto")};
  width: 10rem;

  @media ${BREAKPOINTS.tablet} {
    margin: 0rem 0rem 1.5rem 1.5rem;
  }

  @media ${BREAKPOINTS.laptop} {
    margin: 0rem 0rem 1.5rem 1.5rem;
  }

  &:hover {
    background-color: ${COLORS.lightBlue};
    transform: scale(1.1);
  }
`;

export default Card;
