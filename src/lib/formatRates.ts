export const formatRates = (firstMetric: number, secondMetric: number): number => {
  if (firstMetric * secondMetric === 0) return 0;

  const rate = firstMetric / secondMetric;
  const rateRounded = rate.toFixed(2);
  const rateFormatted = parseInt(rateRounded);

  return rateFormatted;
}