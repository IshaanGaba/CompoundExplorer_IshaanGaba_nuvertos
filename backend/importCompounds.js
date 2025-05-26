const fs   = require('fs');
const path = require('path');
const csv  = require('csv-parser');
const db   = require('./models');
const Compound = db.Compound;

(async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log('Database synced.');

    const results = [];
    fs.createReadStream(path.join(__dirname, 'compound.csv'))
      .pipe(csv())
      .on('data', data => {
        results.push({
          id:          parseInt(data.id, 10),
          name:        data.CompoundName,
          description: data.CompounrDescription,
          image:       data.strImageSource
        });
      })
      .on('end', async () => {
        await Compound.bulkCreate(results);
        console.log('Compounds imported successfully');
        process.exit(0);
      })
      .on('error', err => {
        console.error('Error reading CSV:', err);
        process.exit(1);
      });

  } catch (err) {
    console.error('Import failed:', err);
    process.exit(1);
  }
})();
