import React from "react";
import styled from "styled-components/macro";

const GalleryCard = ({
  image,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
}) => {
  return (
    <div>
      <ImageWrapper>
        <ImageWrap>
          {/* <Image src={image} /> */}
          <img className='image' src={image1} alt="" />
          <img className='image' src={image2} alt="" />
          <img className='image' src={image3} alt="" />
          <img className='image' src={image4} alt="" />
          <img className='image' src={image5} alt="" />
          <img className='image' src={image6} alt="" />
          <img className='image' src={image7} alt="" />
        </ImageWrap>
      </ImageWrapper>
    </div>
  );
};

const ImageWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 180px);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;

  margin: 20px auto;
  max-width: 1000px;
`;

const ImageWrap = styled.div`
  &:nth-child(1) {
    grid-row: 1 / 4;
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: 1 / 3;
  }

  &:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 3 / 5;
  }

  &:nth-child(4) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }

  &:nth-child(5) {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
  }
`;

const Image = styled.img`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default GalleryCard;
