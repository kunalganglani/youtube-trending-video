import * as config from '../config.json';
// Callback function used in youtube.js with route /:videoId
const getVidByIDCallback =  (req, res) => {
    const countryCode = req.query.countryCode;
    res.render('youtube/player', {
      title: config.title,
      videoId: req.params.videoId,
      countryList: config.countryList,
      selectedCountry: countryCode || "AF" // Selected country for the details page, defaulted to AF.
    });
  }

export { getVidByIDCallback };