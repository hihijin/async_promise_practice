async function getNewsAndWeatherAsync() { //async함수사용
  // TODO: async/await 키워드를 이용해 작성합니다

  let obj = {}; //api의 내용이 객체 형태 이므로 객체로 받아와야 한다.
  const news = await fetch(newsURL) //newsurl로부터 정보를 요청하고 news에 담는다.
  .then((response) => response.json())//다음 그 응답에 대해 json()을 해줘서 Promise형태로 반환한다.
  obj.news = news.data; //obj의 news키에 값으로 넣는다.
  const weather = await fetch(weatherURL)//weathersurl로부터 정보를 요청하고 weather에 담는다.
  .then((response) => response.json())//다음 그 응답에 대해 json()을 해줘서 Promise형태로 반환한다.
  obj.weather = weather; //obj의 weather키에 값으로 넣는다.
  return obj;//obj = {news : news.data, weather : weather}
}
if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}

// async 키워드를 사용한 함수는 AsyncFunction의 인스턴스입니다
// /data/latest 의 응답 내용과 /data/weather 응답 내용을 합쳐 새로운 객체로 리턴되어야 합니다
//encountered a declaration exception

/* 다른 풀이
async function getNewsAndWeatherAsync() {
  const {data : news} = await fetch(newURL).then((res) => res.json());
  const weather = await fetch(weatherURL).then((res) => res.json());
  return {new, weather};
}
*/