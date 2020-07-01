export const minAmount = 1000;
export const maxAmount = 5000;

export const minDuration = 6;
export const maxDuration = 36;

export const generateEstimateUrl = (amount, duration) => `https://api.koyoloans.com/interest?amount=${amount}&numMonths=${duration}`;
