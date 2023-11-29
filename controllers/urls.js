const shortid = require("shortid");
const Url = require("../models/url");

module.exports.createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      res.status(500).json("ENTER URL!");
    }
    const expirationDate = Date.now() + (24 * 60 * 60 * 1000);
    const urlCode = shortid();
    const data = await new Url({
      originalUrl: url,
      shortUrl: urlCode,
      expirationTime: expirationDate,
    });
    data.save();
    return res.json(urlCode);
  } catch (err) {
    res.status(500).json("ERROR:", err);
  }
};

module.exports.getUrl = async (req, res) => {
  try {
    const { shortid } = req.params;
    const findUrl = await Url.findOne({ shortUrl: shortid });
    if (!findUrl) {
      res.status(400).json("URL NOT FOUND");
    } else {
        const currentDate = new Date();
        const expirationDate = findUrl.expirationTime;
        if(expirationDate > currentDate){
            return res.redirect(findUrl.originalUrl);
        } else {
            res.status(400).json('THE DATE HAS EXPIRED')
        }
    }
    
  } catch (err) {
    res.status(500).json("ERROR:", err);
  }
};
