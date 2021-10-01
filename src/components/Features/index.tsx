import {
  Button,
  Grid,
  Hidden,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import HintText from 'components/HintText';
import React from 'react';
import FeatureTableRow from './FeatureTableRow';
import {
  Chevron,
  HeaderTopCell,
  HeaderTopRow,
  StyledFormControl,
  UnderlinedTypography,
} from './styles';

const Features: React.FC = () => (
  <Grid container alignItems="center" direction="column" spacing={4}>
    <Grid item>
      <Typography variant="h2">All the features you need.</Typography>
    </Grid>
    <Grid item>
      <HintText>Select plans to compare</HintText>
    </Grid>
    <Grid item>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <StyledFormControl fullWidth>
            <InputLabel id="featureSelect1Label">Select</InputLabel>
            <Select
              id="featureSelect1"
              labelId="featureSelect1Label"
              label="Select"
              value=""
            >
              <MenuItem value={1}>Value1</MenuItem>
              <MenuItem value={2}>Value2</MenuItem>
            </Select>
          </StyledFormControl>
        </Grid>
        <Hidden xsDown>
          <Grid item>
            <HintText>to</HintText>
          </Grid>
        </Hidden>
        <Grid item>
          <StyledFormControl fullWidth>
            <InputLabel id="featureSelect1Label">Select</InputLabel>
            <Select
              id="featureSelect1"
              labelId="featureSelect1Label"
              label="Select"
              value=""
            >
              <MenuItem value={1}>Value1</MenuItem>
              <MenuItem value={2}>Value2</MenuItem>
            </Select>
          </StyledFormControl>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Table>
        <TableHead>
          <HeaderTopRow>
            <HeaderTopCell>Features</HeaderTopCell>
            <HeaderTopCell>Pioneer</HeaderTopCell>
            <HeaderTopCell>Explorer</HeaderTopCell>
            <HeaderTopCell>Adventurer</HeaderTopCell>
            <HeaderTopCell>Hero</HeaderTopCell>
          </HeaderTopRow>
          <TableRow>
            <TableCell>Available on all exchanges</TableCell>
            <TableCell>All exchanges</TableCell>
            <TableCell>All exchanges</TableCell>
            <TableCell>All exchanges</TableCell>
            <TableCell>All exchanges</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <FeatureTableRow
            feature="Live trading terminal"
            presence={Array(4).fill(true)}
          />
          <FeatureTableRow
            feature="Portfolio Management"
            presence={Array(4).fill(true)}
          />
          <FeatureTableRow
            feature="Manual trading"
            presence={Array(4).fill(true)}
          />
          <FeatureTableRow
            feature="Syncing positions"
            presence={Array(4).fill(true)}
          />
          <FeatureTableRow
            feature="Reserve positions"
            presence={Array(4).fill(true)}
          />
          <FeatureTableRow
            feature="Personal stats"
            presence={Array(4).fill(true)}
          />
          <FeatureTableRow
            feature="Global stats"
            presence={Array(4).fill(true)}
          />
          <FeatureTableRow
            feature="Strategy builder"
            presence={[false, true, false, true]}
          />
        </TableBody>
      </Table>
    </Grid>
    <Grid item>
      <Button variant="text">
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Chevron />
          </Grid>
          <Grid item>
            <UnderlinedTypography>Show more</UnderlinedTypography>
          </Grid>
        </Grid>
      </Button>
    </Grid>
  </Grid>
);

export default Features;
