const parseJson = (input: string | object) => {
  return JSON.parse(JSON.stringify(input));
};

export default parseJson;
