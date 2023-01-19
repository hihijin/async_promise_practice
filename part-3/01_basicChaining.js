//실행하려면 터미널에서 npm run server:part-3 을 실행하고 specrunner.html 브라우저를 열면 확인가능

const newsURL = 'http://localhost:4999/data/latestNews'; //news data가 있는 url
const weatherURL = 'http://localhost:4999/data/weather'; //weather data가 있는 url

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  let obj = {}; //api의 내용이 객체 형태 이므로 객체로 받아와야 한다.
  return fetch(newsURL)//newsurl로부터 정보를 요청한다.
    .then((response) => response.json())//다음 그 응답에 대해 json()을 해줘야 한다.
    // json()은 Response 스트림을 가져와 스트림이 완료될때까지 읽는다. 그리고 다 읽은 body의 텍스트를 Promise형태로 반환한다.
    .then((news) => {//그 promise형태의 결과를 
      obj.news = news.data;//obj의 news키에 값으로 넣는다.
      return fetch(weatherURL);//다음 weatherutl로부터 정보를 요청한다.
    })
    .then((response) => response.json())//다음 그 응답에 대해 json()을 해줘서 다읽은 body의 텍스트를 promoise형태로 반환한다.
    .then((weather) => {//그 promise형태의 결과를
      obj.weather = weather;//obj의 weather키에 값으로 넣는다.
      return obj;//obj = {news : news.data, weather : weather}
    })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}

//체이닝의 결과가 Promise 형태로 리턴되어야 합니다
///data/latest 의 응답 내용과 /data/weather 응답 내용을 합쳐 새로운 객체로 리턴되어야 합니다
//fetch를 활용하세요. 총 두 번 사용해야 합니다
//encountered a declaration exception