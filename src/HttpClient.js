import axios from "axios";
const nasaApiKey = "Zy4St8Jlm4Sp50A0rwHvume6inOOCGSA97eweXYG";
const nasaEndpoint = "https://api.nasa.gov/";
const nasaWeatherEndpoint = "https://api.nasa.gov/insight_weather/";
const nasaImgEndpoint = "https://images-api.nasa.gov";

axios.interceptors.request.use(
  (config) => {
    config.params = config.params ? config.params : {};
    const configUrl = config.url;
    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey;
    }

    if (configUrl.includes(nasaImgEndpoint)) {
      config.params["api_key"] = nasaApiKey;
    }

    if (configUrl.includes(nasaWeatherEndpoint)) {
      config.params["api_key"] = nasaApiKey;
      config.params["feedType"] = "json";
      config.params["ver"] = "1.0";
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
    return axios.get(`${nasaEndpoint}planetary/apod`);
  },
  getImages(image) {
    return axios.get(`${nasaImgEndpoint}/asset/${image}`);
  },
  getWeather() {
    return axios.get(`${nasaWeatherEndpoint}`);
  },
};
