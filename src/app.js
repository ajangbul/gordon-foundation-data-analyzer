import { join } from 'path';
import { readCsv } from './readCSV.js';

export const calculateAverage = array => array.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / array.length;

export const processData = async (FILE_PATH=join(process.cwd(), FILE_PATH), locationId) => {

  const results = await readCsv(FILE_PATH);
  const resultValue = [];

  results.map(data => {
    if (data['CharacteristicName'] === 'Temperature, water' && data['MonitoringLocationID'] === locationId) {
      resultValue.push(parseFloat(data.ResultValue, 10));
    }
  });

  return calculateAverage(resultValue);
};


// Testing => you can test for different MonitoringLocationID
processData('./src/indian-bay-ecosystem-corporation.csv', 'WS');
