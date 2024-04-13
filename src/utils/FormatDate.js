export const formatDate = () => {
  return new Date()
    .toISOString()
    .replace(/T/, ' ') // replace T with a space
    .replace(/\..+/, '');
};
