const convertMultiLineFileToArray = async (
  input: string,
): Promise<string[]> => {
  const inputString = await Deno.readTextFile(input);
  const inputStringTrimmed = inputString.trimEnd();
  return inputStringTrimmed.split(/\n/);
};

export default convertMultiLineFileToArray
