const Poem = require('../../database/models/poems');
const { generatePoem } = require('../../database/helpers/generatePoem');

const userInputExample = {
  adjectives: ['Example', 'Example', 'Example'],
  adverbs: ['Example', 'Example', 'Example'],
  nouns: ['Example', 'Example', 'Example'],
  prepositions: ['Example', 'Example', 'Example'],
  verbs: ['Example', 'Example', 'Example'],
};

Poem.countDocuments({}).exec((error, count) => {
  let recordsCreated = 0;
  const templatedPoem = generatePoem('winter', userInputExample);
  if (error) {
    console.error('error seeding poem in the db', error);
    return;
  }
  if (count < 10) {
    while (recordsCreated < 20) {
      // eslint-disable-next-line no-loop-func
      Poem.create({ poem: templatedPoem, userInput: userInputExample }, (err) => {
        recordsCreated++;
        if (err) {
          console.error('error seeding poem in the db', error);
          return;
        }
        console.log('poem seeded in the db');
      });
    }
  }
});
