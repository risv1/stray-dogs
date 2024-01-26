import fs from 'fs/promises';

export const HelloWorld = (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
};

export const getCharactersData = async () => {
  try {
    const data = await fs.readFile('../data/data.json', {encoding: "utf-8"});
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    console.error('Error reading or parsing data:', error);
    throw error;
  }
};

