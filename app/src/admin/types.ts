export type ModelChartResponse = {
  date: string[];
  value: {
    model: string;
    data: number[];
  }[];
};

export type RequestChartResponse = {
  date: string[];
  value: number[];
};

export type BillingChartResponse = {
  date: string[];
  value: number[];
};

export type ErrorChartResponse = {
  date: string[];
  value: number[];
};
