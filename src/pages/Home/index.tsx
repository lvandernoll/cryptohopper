import { Box } from '@material-ui/core';
import Intro from 'components/Intro';
import React, { useState } from 'react';
import { Pricing } from 'types';

const Home: React.FC = () => {
  const [activePricing, setActivePricing] = useState<Pricing>('annualy');

  return (
    <>
      <Box m={[1, 10]} mb={[2, 4]}>
        <Intro
          activePricing={activePricing}
          setActivePricing={setActivePricing}
        />
      </Box>
    </>
  );
};

export default Home;
