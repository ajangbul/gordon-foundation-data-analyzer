import fs from 'fs'
import csv from 'csv-parser';

export const readCsv = (
  file,
  options = {
    headers: true,
    ignoreEmpty: true,
    discardUnmappedColumns: true,
  },
) => new Promise((resolve, reject) => {
  const stream = [];
    fs.createReadStream(file, options)
    .pipe(csv())
    .on('data', (row) => stream.push(row))
    .on('error', reject)
    .on('end', () => resolve(stream));
});
