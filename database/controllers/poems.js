const Poem = require('../models/poems');

// post
const postPoem = (req, res) => {
  Poem.create({ poem: req.body.poem }, (err, poem) => {
    if (err) {
      console.error('issue posting to the db', err);
      res.sendStatus(404);
    } else {
      console.log('poem posted to the db', poem);
      const reqInfo = {
        id: poem._id,
        createdAt: poem.createdAt,
        updatedAt: poem.updatedAt,
      };
      res.status(401).send(JSON.stringify(reqInfo));
    }
  });
};

// GET
// DELETE
// const deletePoem = (req, res) => {
//   Poem.deleteOne({})

// }
// PUT

module.exports = {
  postPoem,
};
