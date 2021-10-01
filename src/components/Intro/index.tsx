import { Box, Grid, Typography } from '@material-ui/core';
import React, { useCallback } from 'react';
import { Pricing } from 'types';
import { ButtonWrapper, StyledButton } from './styles';

interface IntroProps {
  activePricing: Pricing;
  setActivePricing: (pricing: Pricing) => void;
}

const Intro: React.FC<IntroProps> = ({ activePricing, setActivePricing }) => {
  const createPricingButton = useCallback(
    (pricing: Pricing) => (
      <StyledButton
        color={activePricing === pricing ? 'primary' : 'default'}
        selected={activePricing === pricing}
        onClick={() => setActivePricing(pricing)}
      >
        {pricing}
      </StyledButton>
    ),
    [activePricing, setActivePricing],
  );

  return (
    <Grid container direction="column" alignContent="center">
      <Grid item>
        <Typography component="h2" variant="h1" align="center">
          Pricing.
        </Typography>
      </Grid>
      <Grid item>
        <Box mx={8} my={[2, 4]}>
          <Typography variant="h5" component="p" align="center">
            Become a member & join over 300.000 other Hoppers today!
            <br />
            Cryptohopper is free to use, create your free account now!
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <ButtonWrapper>
          {createPricingButton('annualy')}
          {createPricingButton('monthly')}
        </ButtonWrapper>
      </Grid>
    </Grid>
  );
};

export default Intro;
