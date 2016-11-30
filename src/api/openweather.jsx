import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=c4e735ea8bd7e7b6dc8368c752517b2d';

export function getTemp(cityname){
  const url =`${OPEN_WEATHER_MAP_URL}&q=${encodeURIComponent(cityname)}`;

  return axios.get(url).then(function(res){
    if (!res.data || !res.data.count || (res.data.cod != '200' && res.data.message !== undefined)) {
      throw new Error((res.data && res.data.message) || 'very error');
    }
    return res.data.list[0].main.temp;
  }, function(res){
    throw new Error((res.data && res.data.message) || 'very error2');
  })
}
