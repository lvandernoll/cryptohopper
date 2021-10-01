import { Box } from '@material-ui/core';
import Features from 'components/Features';
import Intro from 'components/Intro';
import Plans from 'components/Plans';
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
      <Box mx={[1, 10]} my={[2, 4]}>
        <Plans
          plans={[
            {
              name: 'Pioneer',
              price: 'Free',
              sellingPoints: [
                '20 positions',
                'portfolio management',
                'manual trading',
                'all available exchanges',
              ],
            },
            {
              name: 'Explorer',
              price: `$${
                activePricing === 'annualy' ? '16.58' : '19.00'
              }/month`,
              sellingPoints: [
                '80 positions',
                'portfolio management',
                'manual trading',
                'all available exchanges',
              ],
              freeTrial: true,
            },
            {
              name: 'Adventurer',
              price: `$${
                activePricing === 'annualy' ? '41.58' : '49.00'
              }/month`,
              sellingPoints: [
                '200 positions',
                'portfolio management',
                'manual trading',
                'all available exchanges',
              ],
            },
            {
              name: 'Hero',
              price: `$${
                activePricing === 'annualy' ? '83.25' : '99.00'
              }/month`,
              sellingPoints: [
                '500 positions',
                'portfolio management',
                'manual trading',
                'all coins for signals',
                'market arbitrage',
                'algorithm intelligence',
              ],
              bestValue: true,
            },
          ]}
        />
      </Box>
      <Box mx={[1, 10]} my={[2, 15]}>
        <Features />
      </Box>
    </>
  );
};

export default Home;
