import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { Checkmark, Times } from './styles';

interface FeatureTableRowProps {
  feature: string;
  presence: boolean[];
}

const FeatureTableRow: React.FC<FeatureTableRowProps> = ({
  feature,
  presence,
}) => (
  <TableRow>
    <TableCell>{feature}</TableCell>
    {presence.map((present, i) => (
      // Using index as key because we know content won't change
      // eslint-disable-next-line react/no-array-index-key
      <TableCell key={i}>{present ? <Checkmark /> : <Times />}</TableCell>
    ))}
  </TableRow>
);

export default FeatureTableRow;
