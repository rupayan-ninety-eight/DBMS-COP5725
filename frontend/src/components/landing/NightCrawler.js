import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Box, Heading, Paragraph } from "grommet";

export const StyledHeading = styled(Heading)`
  font-weight: 200;
`;

const NightCrawler = ({ size, ...rest }) => (
  <Fragment>
    <Box direction="row" {...rest}>
      <StyledHeading size={size}>Night</StyledHeading>
      <Heading size={size}>Crawler</Heading>
    </Box>
    <Paragraph margin={{ top: "none" }} textAlign="center" size="xxlarge">
      Numerous crimes against women are happening in L.A. everyday. 
      Night<b>Crawler</b> is trying to use the data provided with local police department 
      and help women to avoid the most dangerours scenes and visualize the crime analysis by trend. 
    </Paragraph>
    <Paragraph margin={{ top: "none" }} textAlign="center" size="xxlarge"> 
      Prevention is better than cure and knowledge is power. 
      Protect you and your friends with power of data and analysis!
    </Paragraph>
  </Fragment>
);

NightCrawler.propTypes = {
  size: PropTypes.string.isRequired,
};

export { NightCrawler };
