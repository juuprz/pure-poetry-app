const Poem = require('../models/poems');

// POST ONE
const postPoem = (req, res) => {
  Poem.create({ poem: req.body.poem })
    .then((poem) => {
      console.log('poem posted to the db', poem);
      res.status(401).send(JSON.stringify(poem));
    }, (e) => {
      console.error('issue posting to the db', e);
      res.sendStatus(404);
    });
};

// GET ALL
const getPoems = (req, res) => {
  Poem.find({}).limit(15)
    .then((poems) => {
      const reqInfo = poems.map(poem => ({
        id: poem._id,
        createdAt: poem.createdAt,
        updatedAt: poem.updatedAt,
      }));
      res.status(200).send(JSON.stringify(reqInfo));
    }, e => console.error('issue retrieving poems from the db', e));
};

// DELETE ONE
const deletePoem = (req, res) => {
  Poem.deleteOne({ _id: req.body.id })
    .then((poem) => {
      console.log(poem, 'has been deleted');
      res.sendStatus(200);
    },
    e => console.error('issue deleting the poem in the db', e));
};

// EDIT ONE
const editPoem = (req, res) => {
  Poem.updateOne({ _id: req.body.id }, { poem: req.body.poem })
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
