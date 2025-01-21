export const useFormatPrice = (price) => {
  return price ? `€${price},00` : '';
};
