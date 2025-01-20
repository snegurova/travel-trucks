export const useFormatPrice = (price) => {
  return new Intl.NumberFormat('pl-pl', {
    style: 'currency',
    currency: 'EUR',
  })
    .format(price)
    .replace(/\u00A0/g, ' ')
    .split(' ')
    .reverse()
    .join('');
};
