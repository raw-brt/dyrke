export const getStampFyiURL = (address: string) => {
  return `https://cdn.stamp.fyi/avatar/eth:${address.toLowerCase()}?s=250`;
};
