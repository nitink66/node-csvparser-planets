const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

const isHabitable = (planet) => {
    //koi_insol - stellar flux is amount of light that planet gets for survival of life
    //koi_prad - how large a planet can be
    return (
        planet['koi_disposition'] === 'CONFIRMED' &&
        planet['koi_insol'] > 0.36 &&
        planet['koi_insol'] < 1.11 &&
        planet['koi_prad'] < 1.6
    );
};

// reading the file using the stream
// this will read the file and gives back array of buffers - these are objects
// which node uses to represent bits and bytes of information
fs.createReadStream('kepler_data.csv')
    .pipe(
        parse({
            comment: '#',
            columns: true,
        })
    )
    .on('data', (data) => {
        if (isHabitable(data)) {
            results.push(data);
        }
    })
    .on('error', (err) => {
        console.log(`Something went wrong ${err}`);
    })
    .on('end', () => {
        console.log(
            'Habitable planets found : ',
            results.map((planetItem) => planetItem['kepler_name'])
        );
        console.log('Habitable planets found : ', results.length);
        console.log('End of file stream');
    });
