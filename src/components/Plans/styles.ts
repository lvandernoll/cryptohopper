import { Button, Grid, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { ReactComponent as Glow1Svg } from 'assets/glow1.svg';
import { ReactComponent as Glow2Svg } from 'assets/glow2.svg';
import { ReactComponent as BigWaveSvg } from 'assets/wave2.svg';

export const StyledGrid = styled(Grid)`
  position: relative;
`;

export const BigWave = styled(BigWaveSvg)`
  position: absolute;
  z-index: -1;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledPaper = styled(Paper)`
  position: relative;
  overflow: hidden;
`;

export const WaveImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  min-width: 100%;
  height: 80px;
`;

const Glow = `
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
`;

export const Glow1 = styled(Glow1Svg)`
  ${Glow}
`;

export const Glow2 = styled(Glow2Svg)`
  ${Glow}
`;

export const StyledChip = styled.div`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(1, 3)};
  width: max-content;
  display: block;
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledButton = styled(Button)`
  width: max-content;
`;

export const StyledList = styled.ul`
  padding-left: ${({ theme }) => theme.spacing(3)}px;
`;
