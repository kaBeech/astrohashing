const fetchAndParseJSON = async (uri: string) => {
  try {
    const jsonResponse = await fetch(uri);
    const jsonData = await jsonResponse.json();
    return jsonData;
  } catch (error) {
    error;
  }
};

const fetchAndParseHTML = async (uri: string) => {
  try {
    const textResponse = await fetch(uri);
    const textData = await textResponse.text();
    return textData;
  } catch (error) {
    error;
  }
};

export default { fetchAndParseJSON, fetchAndParseHTML };
