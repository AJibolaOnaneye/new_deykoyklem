import React from 'react'
import ceo from '../assets/ceo.jpg'
import './modal.css'
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { COLORS, FONTS, FONT_SIZES, WEIGHTS, BREAKPOINTS } from '../constants';
import Button from './Button';
import { FaTimes } from "react-icons/fa";

const CardModal = ({image, description, heading, qualities, showDialog, setShowDialog,}, props ) => {
    const close = () => setShowDialog(false);
	const exitModal = () => setShowDialog(false);

    return (
        
        <ModalOverlay isOpen={showDialog} onDismiss={close}>

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
			<Times onClick={exitModal}  />
			</CloseIcon>
        </ModalContent>
        </ModalOverlay>
    )
}

export default CardModal


const ModalOverlay = styled(DialogOverlay)`

	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	
`;

const ModalContent = styled(DialogContent)`
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

`;



const ModalImageWrapper = styled.div`
width: 18rem;
`;
const ModalImage = styled.img`
max-width: 100%;
width: auto;
height: 25rem;
object-fit: fill;

@media ${BREAKPOINTS.laptop} {
	max-width: 100%;
	width: 400px;
	height: 25rem;
	object-fit: cover;
	
}
`;

const Heading = styled.h3`
	// color: ${COLORS.white};
	font-size: 28px;
	line-height: 1.14;

	@media ${BREAKPOINTS.tablet} {
		font-size: ${FONT_SIZES.m};
		line-height: 1.2;
	}
`;
const SubHeading = styled.h5`
	// color: ${COLORS.white};
	font-size: 18px;
	line-height: 1.14;
   

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

	padding: 24px;
	padding-top: 40px;
    max-widht: 50rem;
	// color: ${COLORS.grey[500]};

	@media ${BREAKPOINTS.tablet} {
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

// style={{fontSize: '1.5rem', cursor:'pointer', }}