import React from 'react';
import styled from 'styled-components/macro';
import heroService from '../assets/services.jpg';
import heroStaffs from '../assets/team.jpg';
import heroGallery from '../assets/gallery.jpg';
import heroContact from '../assets/call.jpg';

import { COLORS, BREAKPOINTS, FONT_SIZES } from '../constants';


function Hero({ variant, title, description, children }) {
	let Component;
	if (variant === 'home') {
		Component = HomeHero;
	} else if (variant === 'ourservice') {
		Component = OurServiceHero;
	} else if (variant === 'partners') {
		Component = PartnersHero;
	} else if (variant === 'gallery') {
		Component = GalleryHero;
	} else if (variant === 'contact') {
		Component = ContactHero;
	} else {
		throw new Error(`Unrecognized Hero variant: ${variant}`);
	}

	return (
		<Component>
			<Content>
				<Heading id="main">{title}</Heading>
				{/* <p>{description}</p>
				{children} */}
			</Content>
		</Component>
	);
}

const BaseHero = styled.section`
	background-size: cover;
	border-radius: 10px;
	display: flex;
	align-items: center;
	background-position: center center;
`;

const HomeHero = styled(BaseHero)`
	
	height: 500px;

	@media ${BREAKPOINTS.tablet} {
		background-image: url(${''});
	}

	@media ${BREAKPOINTS.laptop} {
		background-image: url(${''});
		height: 600px;
	}
`;

const OurServiceHero = styled(BaseHero)`
	background-image: linear-gradient(rgba(65, 99, 114, 0.603), rgba(51, 59, 63, 0.432)), url(${heroService});
	height: 150px;

	@media ${BREAKPOINTS.tablet} {
		background-image: linear-gradient(rgba(65, 99, 114, 0.603), rgba(51, 59, 63, 0.432)),url(${heroService});
		height: 200px;
	}

	@media ${BREAKPOINTS.laptop} {
		background-image:linear-gradient(rgba(65, 99, 114, 0.603), rgba(51, 59, 63, 0.432)), url(${heroService});
		height: 350px;
		// object-fit: fill;
	}
`;

const PartnersHero = styled(BaseHero)`
	background-image: linear-gradient(rgba(65, 99, 114, 0.603), rgba(51, 59, 63, 0.432)), url(${heroStaffs});
	height: 150px;

	@media ${BREAKPOINTS.tablet} {
		background-image: linear-gradient(rgba(65, 99, 114, 0.603), rgba(51, 59, 63, 0.432)),url(${heroStaffs});
		height: 250px;
	}

	@media ${BREAKPOINTS.laptop} {
		background-image:linear-gradient(rgba(65, 99, 114, 0.603), rgba(51, 59, 63, 0.432)), url(${heroStaffs});
		height: 350px;
	}
`;
const GalleryHero = styled(BaseHero)`
	background-image: linear-gradient(rgba(65, 99, 114, 0.603), rgba(51, 59, 63, 0.432)),url(${heroGallery});
	height: 150px;

	@media ${BREAKPOINTS.tablet} {
		background-image: linear-gradient(rgba(65, 99, 114, 0.603), rgba(51, 59, 63, 0.432)),url(${heroGallery});
		height: 250px;
	}

	@media ${BREAKPOINTS.laptop} {
		background-image: linear-gradient(rgba(65, 99, 114, 0.603), rgba(51, 59, 63, 0.432)),url(${heroGallery});
		height: 350px;
	}
`;

const ContactHero = styled(BaseHero)`
	background-image:linear-gradient(rgba(65, 99, 114, 0.603), rgba(51, 59, 63, 0.432)), url(${heroContact});
	height: 150px;

	@media ${BREAKPOINTS.tablet} {
		background-image: linear-gradient(rgba(65, 99, 114, 0.603), rgba(51, 59, 63, 0.432)),url(${heroContact});
	}

	@media ${BREAKPOINTS.laptop} {
		background-image:linear-gradient(rgba(65, 99, 114, 0.603), rgba(51, 59, 63, 0.432)), url(${heroContact});
		height: 350px;
	}
`;



const Content = styled.div`
	color: ${COLORS.lightCream[100]};
	text-align: center;
	padding: 0 24px;

	@media ${BREAKPOINTS.tablet} {
		text-align: center;
		width: 398px;
		padding: 0;
		margin-left: 58px;
	}

	@media ${BREAKPOINTS.desktop} {
		width: 398px;
		// margin-left: 85px;
		
	}

	width: 100%;
	${HomeHero} & {

		@media ${BREAKPOINTS.tablet} {
			width:100%;
		}

		@media ${BREAKPOINTS.desktop} {
			width: 493px;
		}
	}

	${OurServiceHero} & {
		@media ${BREAKPOINTS.tablet} {
			width:100%;
		}


		@media ${BREAKPOINTS.desktop} {
			width:100%;
			// text-align: center;
		}
	}

	${PartnersHero} & {
		@media ${BREAKPOINTS.tablet} {
			width:100%;
		}

		@media ${BREAKPOINTS.desktop} {
			width: 100%;
		}
	}
	${GalleryHero} & {
		@media ${BREAKPOINTS.tablet} {
			width:100%;
		}

		@media ${BREAKPOINTS.desktop} {
			width: 100%;
		}
	}
	${ContactHero} & {
		@media ${BREAKPOINTS.tablet} {
			width:100%;
		}

		@media ${BREAKPOINTS.desktop} {
			width: 100%;
		}
	}
`;

const Heading = styled.h1`

	${HomeHero} &,
    ${'PlanHero'} & {
		font-size: ${FONT_SIZES.xl};
		margin-bottom: 24px;

		@media ${BREAKPOINTS.tablet} {
			font-size: ${FONT_SIZES.xxl};
		}

		@media ${BREAKPOINTS.desktop} {
			font-size: ${FONT_SIZES.xxxl};
			margin-bottom: 32px;
		}
	}

	${'AboutHero'} & {
		font-size: 1.75rem;
		margin-bottom: 24px;

		@media ${BREAKPOINTS.tablet} {
			font-size: ${FONT_SIZES.l};
		}

		@media ${BREAKPOINTS.desktop} {
			font-size: ${FONT_SIZES.xl};
		}
	}
`;

export default Hero;
