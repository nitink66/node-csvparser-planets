# node-csvparser-planets
Parsing and Exploring Kepler Exoplanets using the csv file provided by NASA

Kepler Data used - [ExoPlanet](https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=cumulative)

[CSV Parser](https://www.npmjs.com/package/csv-parse) - used to parse the data 

Main points : 
 Using the ``fs.createReadStream()`` from `node` to read and using ``pipe()`` to connect and `csv-parse` to parse the big data row by row with comma separated values.
 
 Exploration - Added a small condition to check if the planet is habitable
