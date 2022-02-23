export const phoneConverter = (number) => {
  const n = number.toString();
  const str = `(${n.slice(0, 3)})${n.slice(3, 6)}-${n.slice(6)}`;
  return str;
};
