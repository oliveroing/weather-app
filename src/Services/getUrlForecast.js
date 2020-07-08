import { url_base_forecast, api_key } from './../Constants/api_url';

const getUrlForecast = payload => {
    return `${url_base_forecast}?q=${payload}&appid=${api_key}`;
}

export default getUrlForecast;