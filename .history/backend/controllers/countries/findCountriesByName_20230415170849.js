const { News } = require('../../models/countries');

const findNewsByTitle = async searchTitle => {
  console.log("Countries")
  const query = { title: { $regex: searchTitle, $options: 'i' } };
  const news = await News.find(query).exec();
  return news;
};

module.exports = findNewsByTitle;
