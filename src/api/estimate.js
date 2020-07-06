import { generateEstimateUrl } from "../utils/constants";

export const requestEstimate = async (amount, duration) => {
  try {
    const url = generateEstimateUrl(amount, duration)
    const response = await fetch(url);
    const { monthlyPayment, nominalInterestRate } = await response.json();

    return {
      success: true,
      result: {
        monthlyPayment,
        nominalInterestRate
      }
    };
  } catch (error) {
    return {
      success: false,
      result: error.message
    };
  }
};