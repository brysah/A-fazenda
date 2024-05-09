export const calculatePercentage = (positive, negative) => {
  if (typeof positive === "string") positive = Number(positive);
  if (typeof negative === "string") negative = Number(negative);
  const total = positive + negative;
  if (isNaN(total)) return null;
  const resultPostive = Math.round((100 * positive) / total);
  const resultNegative = Math.round((100 * negative) / total);
  return { negative: resultNegative, positive: resultPostive };
}
