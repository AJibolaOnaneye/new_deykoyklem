import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { FaTimes } from "react-icons/fa";
import { COLORS, FONT_SIZES, BREAKPOINTS, FONTS } from '../constants';



 const Modal = ({ image, description, heading, qualities, showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
	  <Container>

        <ModalOverlay onClick={closeModal} showModal={showModal} ref={modalRef}>
          <animated.div style={animation}>
			<ModalContent>
            <ModalImageWrapper >
                <ModalImage src={image} alt='' />
            </ModalImageWrapper>
            <ContentWrapper >
                <Heading >{heading}</Heading>
                <SubHeading> {description} </SubHeading>
                <Subtext>{qualities} </Subtext>
            </ContentWrapper>
			<CloseIcon  >
			<Times aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}  />
			</CloseIcon>
        </ModalContent>
          </animated.div>
        </ModalOverlay>
	  </Container>
    </>
  );
};

export default Modal;

const Container = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom0;

`;

const ModalOverlay = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
min-width: 100vw;
position: absolute;
left: 0;
overflow:auto;
background: rgba(0, 0, 0, 0.8);
  
`;

const ModalContent = styled.div`
width: 20rem;
height: 25rem;
	padding: 0;
	overflow: hidden;
	border-radius: 8px;
    text-align: center;
	display: flex;
	flex-direction: column;
    gap: 10px;
    background-color: ${COLORS.white};
	position: relative;

	@media ${BREAKPOINTS.tablet} {
		margin: 20px;
		width: 50rem;
     height: 25rem;
	padding: 0;
	overflow: hidden;
	border-radius: 8px;
    text-align: center;
	display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    background-color: ${COLORS.white};
	position: relative;     
	}
	@media ${BREAKPOINTS.laptop} {
		// padding: 65px 10px;
		width: 50rem;
     height: 25rem;
	// max-width: 540px;
	padding: 0;
	overflow: hidden;
	border-radius: 8px;
    text-align: center;
	display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    background-color: ${COLORS.white};
	position: relative;
	}

`;



const ModalImageWrapper = styled.div`
width: 18rem;
`;
const ModalImage = styled.img`
display: none;

@media ${BREAKPOINTS.tablet} {
	max-width: 100%;
	width: auto;
	height: 25rem;
	object-fit: fill;
	display: block;
	
}
@media ${BREAKPOINTS.laptop} {
	max-width: 100%;
	width: 400px;
	height: 25rem;
	object-fit: cover;
	
}
`;

const Heading = styled.h3`
	// color: ${COLORS.white};
	font-size: 24px;
	line-height: 1.14;
	padding: .7rem 0;

	@media ${BREAKPOINTS.tablet} {
		font-size: ${FONT_SIZES.m};
		line-height: 1.2;
	}
`;
const SubHeading = styled.h5`
	// color: ${COLORS.white};
	font-size: 18px;
	line-height: 1.14;
	padding: .3rem 0;
	font-family: ${FONTS.primary}
   

	@media ${BREAKPOINTS.tablet} {
		font-size: ${FONT_SIZES.m};
		line-height: 1.2;
        padding-top: 10px;
	}
	@media ${BREAKPOINTS.tablet} {
		// font-size: ${FONT_SIZES.m};
		// line-height: 1.2;
        padding-top: 20px;
	}
`;

const ContentWrapper = styled.div`

	padding: 54px 3px;
	// padding-top: 40px;
	wdith: 1rem;
    
	// color: ${COLORS.grey[500]};

	@media ${BREAKPOINTS.tablet} {
		max-width: 50rem;
		padding: 56px;
	}
	@media ${BREAKPOINTS.laptop} {
		padding: 65px 10px;
	}
`;

const Subtext = styled.p`
	// color: ${COLORS.grey[700]};
	opacity: 80%;
	margin-bottom: 24px;
    text-align: center;
	

	@media ${BREAKPOINTS.tablet} {
		margin-top: 20px;
		margin-bottom: 47px;
	}
	@media ${BREAKPOINTS.laptop} {
		margin-top: 30px;
		margin-bottom: 47px;
	}
`;

const CloseIcon = styled.div`
	position: absolute;
	right: 0rem;
	padding: 1.5rem 1.8rem;
	
`;
const Times= styled(FaTimes)`
	font-size: 1.5rem;
	cursor: pointer;
	-webkit-transition: -webkit-transform .5s ease-in-out;
    -ms-transition: -ms-transform .5s ease-in-out;
    transition: transform .5s ease-in-out; 
	transform: rotateZ(-180deg);
	&:hover {
		
		transform: rotateZ(180deg);
	}
`;
