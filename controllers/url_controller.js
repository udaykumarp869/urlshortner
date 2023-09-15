const UrlShortner = require("../models/UrlShortner");
const { Op } = require("sequelize");
const crypto = require('crypto')
require('dotenv').config();
/*
This api is used to cretae a short url from a long url
*/
const createShortenUrl = async (req, res) => {
  try {
    const {longUrl} = req.body;

    if(!longUrl){
        response = {
            success: false,
            error: true,
            message: `Please provide a valid url`,
          };
         return res.status(400).json(response); 
    }

    const url = await UrlShortner.findOne({
        where: { longUrl: longUrl }
      });

      if (url) {
        return res.render("shortnedUrl", { shortUrl: url.shortUrl });
      }
    

    // hash the url
    const hash = crypto.createHash('sha256');
    hash.update(longUrl);
    uniqueId = hash.digest('hex');

    // perform base64 encoding

    const charlist = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    shortCode = encode(uniqueId, charlist);

    shortUrl = `http://${process.env.DOMAIN_NAME}/${shortCode}`;


    const newUrl = {
        longUrl : longUrl,
        shortUrl: shortUrl,
        shortCode: shortCode
    }


    const created_Url = await UrlShortner.create(newUrl);
   
    response = {
      success: true,
      error: false,
      message: `Successfully created Short Url`,
      shortUrl: shortUrl
    };
    res.render("shortnedUrl", { shortUrl: shortUrl });
  } catch (error) {
    console.log("Error", error);
    response = {
      success: false,
      error: true,
      message: `Error while creating short url ${error}`,
    };
    res.status(500).json(response);
  }
};

/*
This Api is Used to redirect using a shorturl
*/
const redirectShortUrl = async (req, res) => {
  try {
   const {shortId} = req.params;
    const url = await UrlShortner.findOne({
        where: { shortCode: shortId }
      });
    
      if (url) {
        const longUrl = url.longUrl;
        console.log('Long URL:', longUrl);
       return res.redirect(301,longUrl);
      } else {
        console.log('Short URL not found.');
        response = {
            success: false,
            error: true,
            message: `Short URL not found.`,
          };
          res.status(400).json(response); 
      }
   

  } catch (error) {
    console.log("Error", error);
    response = {
      success: true,
      error: false,
      message: `Error while redirecting Url ${error}`,
    };
    res.status(500).json(response);
  }
};

function encode(id, charlist) {
    const base = charlist.length;
    let encoded = '';
    id=parseInt(id,16);
    while (id > 0) {
      const remainder = id % base;
      encoded = charlist.charAt(remainder) + encoded;
      id = Math.floor(id / base);
    }

    while(encoded.length < 6) {
        encoded = charset.charAt(0) + encoded;
    }

    return encoded.slice(-6);
  }

module.exports = {
createShortenUrl,
redirectShortUrl
};