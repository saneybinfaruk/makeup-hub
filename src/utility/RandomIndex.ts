export default (min = 0, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
