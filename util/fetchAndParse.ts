const fetchAndParseJSON = async (uri: string) => {
  try {
    const jsonResponse = await fetch(uri);
    const jsonData = await jsonResponse.json();
    return jsonData;
  } catch (error) {
    return error;
  }
};

const fetchAndParseHTML = async (uri: string) => {
  try {
    const textResponse = await fetch(uri);
    const textData = await textResponse.text();
    return textData;
  } catch (error) {
    return error;
  }
};

export { fetchAndParseHTML, fetchAndParseJSON };
