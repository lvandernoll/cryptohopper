import { Box, Grid, Hidden, Typography } from '@material-ui/core';
import React, { ReactNode, useMemo } from 'react';
import { Plan as PlanType } from 'types';
import {
  Glow1,
  Glow2,
  StyledButton,
  StyledChip,
  StyledList,
  StyledPaper,
  WaveImage,
} from './styles';

interface PlanProps extends PlanType {
  waveIndex: number;
}

const Plan: React.FC<PlanProps> = ({
  name,
  price,
  sellingPoints,
  freeTrial,
  bestValue,
  waveIndex,
}) => {
  const tryForFree = useMemo<ReactNode>(() => {
    if (freeTrial) {
      return (
        <Grid item>
          <Typography color="primary" variant="h6">
            Try 7 days for free!
          </Typography>
        </Grid>
      );
    }
    return null;
  }, [freeTrial]);

  const waveUrl = useMemo<string>(
    () => require(`../../assets/wave${waveIndex}.svg`),
    [waveIndex],
  );

  return (
    <StyledPaper elevation={1}>
      <WaveImage src={waveUrl} />
      {freeTrial && <Glow1 />}
      {bestValue && <Glow2 />}
      <Box px={4} py={[4, 6]} pb={[4, 8]}>
        <Grid container direction="column" spacing={1}>
          {bestValue && (
            <Grid item>
              <StyledChip>Best Value</StyledChip>
            </Grid>
          )}
          <Grid item>
            <Box mb={1}>
              <Typography variant="h3">{name}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Typography variant="h4">{price}</Typography>
              </Grid>
              <Hidden smUp>{tryForFree}</Hidden>
            </Grid>
          </Grid>
          <Hidden xsDown>
            <Grid item>
              <StyledList>
                {sellingPoints.map((point, i) => (
                  // Using index as key because we know content won't change
                  // eslint-disable-next-line react/no-array-index-key
                  <Typography key={i} component="li" variant="inherit">
                    {point}
                  </Typography>
                ))}
              </StyledList>
            </Grid>
          </Hidden>
          <Grid item>
            <StyledButton
              variant={bestValue ? 'contained' : 'outlined'}
              color={bestValue ? 'primary' : 'default'}
            >
              Get started
            </StyledButton>
          </Grid>
          <Hidden xsDown>{tryForFree}</Hidden>
        </Grid>
      </Box>
    </StyledPaper>
  );
};

export default Plan;
