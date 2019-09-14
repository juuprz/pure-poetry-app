const Poem = require('../models/poems');
const { generatePoem } = require('../helpers/generatePoem');

// POST ONE
const postPoem = (req, res) => {
  // call structure poem
  const templatedPoem = generatePoem(req.body.template, req.body.userInput);
  Poem.create({ poem: templatedPoem, userInput: req.body.userInput })
    .then((poem) => {
      console.log('poem posted to the db', poem);
      res.status(200).send(JSON.stringify(poem));
    }, (e) => {
      console.error('issue posting to the db', e);
      res.sendStatus(404);
    });
};
// GET ALL
const getPoems = (req, res) => {
  Poem.find({}).limit()
    .then((poems) => {
      const reqInfo = poems.map(poem => ({
        id: poem._id,
        createdAt: poem.createdAt,
        poem: poem.poem,
        userInput: poem.userInput,
      }));
      res.status(200).send(JSON.stringify(reqInfo));
    }, e => console.error('issue retrieving poems from the db', e));
};
// DELETE ONE
const deletePoem = (req, res) => {
  Poem.findByIdAndRemove(req.body.data)
    .then((poem) => {
      console.log(poem, 'has been deleted');
      res.sendStatus(200);
    },
    e => console.error('issue deleting the poem in the db', e));
};
// EDIT ONE
const editPoem = (req, res) => {
  const editedPoem = generatePoem(req.body.template, req.body.userInput);
  const updated = {
    poem: editedPoem,
    userInput: req.body.userInput,
  };
  Poem.updateOne({ _id: req.body.id }, updated)
    .then((poem) => {
      console.log(poem, 'has been updated in the db');
      res.sendStatus(200);
    },
    e => console.error('issue updating the poem in the db', e));
};

module.exports = {
  postPoem,
  getPoems,
  deletePoem,
  editPoem,
};
