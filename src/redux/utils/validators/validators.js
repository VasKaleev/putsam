export const required = (value) => {
  if (value) return undefined;
  return 'Field is requred';
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max lenght is ${maxLength} symbols`;
  return undefined;
};

export const maxLength50 = (value) => {
  if (value.length > 50) return 'Max lenght is 50 symvols';
  return undefined;
};
