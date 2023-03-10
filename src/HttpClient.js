import axios from "axios";
const nasaApodEndpoint = "https://api.nasa.gov/";
const nasaImgEndpoint = "https://images-api.nasa.gov";
const nasaApiKey = "Zy4St8Jlm4Sp50A0rwHvume6inOOCGSA97eweXYG";

axios.interceptors.request.use(
  (config) => {
    config.params = config.params ? config.params : {};
    const configUrl = config.url;
    if (configUrl.includes(nasaApodEndpoint)) {
      config.params["api_key"] = nasaApiKey;
    }

    if (configUrl.includes(nasaImgEndpoint)) {
      config.params["api_key"] = nasaApiKey;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// eslint-disable-next-line
export default {
  getApod() {
    return axios.get(`${nasaApodEndpoint}planetary/apod`);
  },
  getImages(image) {
    return axios.get(`${nasaImgEndpoint}/asset/${image}`);
  },
};
