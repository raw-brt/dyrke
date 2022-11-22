export const formatRates = (firstMetric: number, secondMetric: number): number => {
  const rate = firstMetric / secondMetric;
  const rateRounded = rate.toFixed(2);
  const rateFormatted = parseInt(rateRounded);

  return rateFormatted;
}