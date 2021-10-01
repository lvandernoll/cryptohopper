import { Grid, Hidden } from '@material-ui/core';
import React from 'react';
import { Plan as PlanType } from 'types';
import Plan from './Plan';
import { BigWave, StyledGrid } from './styles';

interface PlansProps {
  plans: PlanType[];
}

const waveIndices = [1, 3, 4];

const Plans: React.FC<PlansProps> = ({ plans }) => (
  <StyledGrid container spacing={4} justifyContent="center" alignItems="center">
    <Hidden smDown>
      <BigWave />
    </Hidden>
    {plans.map((plan, i) => (
      // Using index as key because we know content won't change
      // eslint-disable-next-line react/no-array-index-key
      <Grid key={i} item xs={12} sm="auto">
        <Plan {...plan} waveIndex={waveIndices[Math.min(i, 2)]} />
      </Grid>
    ))}
  </StyledGrid>
);

export default Plans;
