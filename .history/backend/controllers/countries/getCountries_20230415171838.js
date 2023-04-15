const { News } = require('../../models/countries');
const { HttpError } = require('../../middlwares/index');

const getNews = async (req, res) => {
  const { page = 1, limit = 6 } = req.query;
  const skip = (page - 1) * limit;
  console.log('get countries');
  const result = await News.find({}, '', { skip, limit });

  if (!result) {
    throw HttpError(404);
  }
  console.log('test2');
 return res.status(200).json(result);
};

module.exports = getNews;
