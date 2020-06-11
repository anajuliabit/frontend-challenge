export const valueBelongSet = (value: number, set: number[]) => {
  set.sort((a, b) => a - b);
  return value >= set[0] && value <= set[set.length - 1];
};
