import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONT_SIZES } from '../constants';

function Attribution() {
	return (
		<Wrapper>
			© 2021 Deykoylem nig. enterprises. All rights reserved
		</Wrapper>
	);
}

const Wrapper = styled.div`
    font-size: ${FONT_SIZES.xxs};
    text-align: center;
    color: ${COLORS.grey[700]};
`;


export default Attribution;
