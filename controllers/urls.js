const shortid = require("shortid");
const Url = require("../models/url");

module.exports.renderNewForm = (req, res) => {
  res.render('new')
}

module.exports.getOneUrl = async (req, res) => {
  const { id } = req.params
  const url = await Url.findOne({shortUrl: id})
  if(url){
    console.log(url);
    return res.render('show', {url})
  } else {
    return res.status(401).json({error: "Short URL not found"})
  }
}

module.exports.createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: "URL is Required" });
    }
    const urlExists = await Url.findOne({ originalUrl: url });
    if (urlExists) {
      return res.status(400).json({ error: "Entered URL Already Exists" });
    }
    const expirationDate = Date.now() + 24 * 60 * 60 * 1000;
    let urlCode;
    let isCodeUnique = false;
    while (!isCodeUnique) {
      urlCode = shortid();
      const ifExists = await Url.findOne({ shortUrl: urlCode });
      if (!ifExists) {
        isCodeUnique = true;
      }
      const data = await new Url({
        originalUrl: url,
        shortUrl: urlCode,
        expirationTime: expirationDate,
      });
      await data.save();
      return res.redirect(`/url/${urlCode}`)
    }
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports.fetchOriginalUrl = async (req, res) => {
  try {
    const { shortid } = req.params;
    const findUrl = await Url.findOne({ shortUrl: shortid });
    if (!findUrl) {
      return res.status(400).json({ error: "URL Not Found" });
    }
    const currentDate = new Date();
    const expirationDate = findUrl.expirationTime;
    if (expirationDate > currentDate) {
      return res.redirect(findUrl.originalUrl);
    } else {
      return res.status(400).json({ error: "The Date Has Expired" });
    }
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};
