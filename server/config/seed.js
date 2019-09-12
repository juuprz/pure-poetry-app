const Poem = require('../../database/models/poems');

Poem.countDocuments({}).exec((error, count) => {
  if (error) {
    console.error('error seeding poem in the db', error);
    return;
  }
  if (count === 0) {
    Poem.create({
      poem: 'im just testing if i can seed the database with this script',
    }, (err) => {
      if (err) {
        console.error('error seeding poem in the db', error);
        return;
      }
      console.log('poem seeded in the db');
    });
  }
});
