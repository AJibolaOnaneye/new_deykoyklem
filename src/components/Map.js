import React from "react";
import styled from "styled-components/macro";

import { BREAKPOINTS } from "../constants";

const Map = () => {
  return (
    <Wrapper>
      <Iframe
        className="map"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=1092&amp;height=642&amp;hl=en&amp;q=1A,%20Unity%20Street,%20Off%20Toyin%20Street,%20Ikeja,%20Lagos%20State.%20Lagos+(Locations)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></Iframe>

      <script
        type="text/javascript"
        src="https://maps-generator.com/google-maps-authorization/script.js?id=a7dd1db5d306536739e29cadef48409522ea8391"
      ></script>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  dispaly: grid;
  text-align: center;
  justify-content: center;
  width: 100%;

  @media ${BREAKPOINTS.tablet} {
    grid-template-columns: repeat(1, auto);
  }

  @media ${BREAKPOINTS.desktop} {
    grid-template-columns: repeat(1, auto);
  }
`;

const Iframe = styled.iframe`
  min-width: 180px;
  height: 345px;

  @media ${BREAKPOINTS.tablet} {
    min-width: 670px;
    height: 542px;
  }

  @media ${BREAKPOINTS.desktop} {
    width: 1100px;
    height: 642px;
  }
`;

export default Map;
