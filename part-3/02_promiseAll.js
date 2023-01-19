function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  let obj = {}; //api의 내용이 객체 형태 이므로 객체로 받아와야 한다.
    let promiseOne = fetch(newsURL)//newsurl로부터 정보를 요청하여 promiseone에 담는다.
    .then((response) => response.json())//다음 그 응답에 대해 json()을 해줘서 Promise형태로 반환한다.
    //.then((news) => {obj.news = news.data})//promiseall에서 할 코드

    let promiseTwo = fetch(weatherURL)//weathersurl로부터 정보를 요청하여 promisetwo에 담는다.
    .then((response) => response.json())//다음 그 응답에 대해 json()을 해줘서 Promise형태로 반환한다.
    //.then((weather) => {obj.weather = weather})//promiseall에서 할 코드

    return Promise.all([promiseOne, promiseTwo]) //프로미스원과 투를 차례대로 동작하고 배열에 담음
    .then((datas) => { //그 다음 동작한 결과를
      obj.news = datas[0].data;
      //obj의 news키에 datas의 첫번째 인덱스인 프로미스원의 결과(.data:그 결과에 data라는 키의 값)를 값으로 준다.
      obj.weather = datas[1];
      //obj의 weather키에 datas의 두번째 인덱스인 프로미스투의 결과를 값으로 준다.
      return obj; //obj = {news : news.data, weather : weather}
    })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}

//Promise 형태로 리턴되어야 합니다
//Promise.all을 사용해서 풀어야 합니다
///data/latest 의 응답 내용과 /data/weather 응답 내용을 합쳐 새로운 객체로 리턴되어야 합니다

/* 다른 풀이
function getNewsAndWeatherAll() {
  return Promose.all([fetch(newsURL), fetch(weatherURL)]).then(
    ([res1, res2]) => {return Promise.all([res1.json(), res2.json()]).then(
      ([{data:news}, weather]) => {
        return {news, weather};
      }
    )
    }
  )

}
*/