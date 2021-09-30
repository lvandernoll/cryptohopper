export type Pricing = 'annualy' | 'monthly';

export type Plan = {
  name: string;
  price: string;
  sellingPoints: string[];
  freeTrial?: boolean;
  bestValue?: boolean;
};
