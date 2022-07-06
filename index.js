const { parser } = require('csv-parse');
const fs = require('fs');

const results = [];

// reading the file using the stream
// this will read the file and gives back array of buffers - these are objects
// which node uses to represent bits and bytes of information
fs.createReadStream('kepler_data.csv')
    .on('data', (data) => {
        results.push(data);
    })
    .on('error', (err) => {
        console.log(`Something went wrong ${err}`);
    })
    .on('end', () => {
        console.log('Results : ', results);

        console.log('End of file stream');
    });
