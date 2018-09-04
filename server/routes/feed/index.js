const express = require('express');
const router = express.Router();
let Parser = require('rss-parser');

const getNewsFromSource = (source = []) => {
  let result = [];
  source.forEach(news => (result = [...result, ...news.items]));
  return result;
};

router.get('/', async (req, res) => {
  var parser = new Parser();
  try {
    const aligatorNews = await parser.parseURL(
      'https://alligator.io//feed.xml',
    );
    const mediumNews = await parser.parseURL('https://medium.com/feed/dailyjs');
    const jsFeedNews = await parser.parseURL('http://jsfeeds.com/feed');
    const cssTricksNews = await parser.parseURL(
      'http://feeds.feedburner.com/CssTricks',
    );

    const news = getNewsFromSource([
      jsFeedNews,
      mediumNews,
      aligatorNews,
      cssTricksNews,
    ]);

    const Feeds = news.map(item => {
      const {
        content = '',
        isoDate = '',
        link = '',
        title = '',
        creator = '',
      } = item;

      return {
        content,
        isoDate,
        link,
        title,
        creator,
      };
    });

    res.send({ status: 200, Feeds });
  } catch (error) {
    res.error(504);
  }
});

module.exports = router;
