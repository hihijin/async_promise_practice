const path = require('path'); //"path" 모듈 불러온다.
const { getDataFromFilePromise } = require('./02_promiseConstructor'); //require파일을 불러온다.

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => { //함수 readAllUsers 선언(전달인자는 없음)
  // TODO: Promise.all을 이용해 작성합니다
  let promiseOne = getDataFromFilePromise(user1Path) //프로미스 객체에 user1path를 인자로 받고 결과를 변수에 담음
  .then(data1 => JSON.parse(data1)) //다음 결과값을 객체로 바꿔줌
  let promiseTwo = getDataFromFilePromise(user2Path)//프로미스 객체의 결과를 변수에 담음
  .then((data2) => JSON.parse(data2)) //다음 결과값을 객체로 바꿔줌
  // promise.all
  return Promise.all([promiseOne, promiseTwo]) //프로미스원과 투를 차례대로 동작하고 배열에 담음
  .then((datas) => {return datas})//그 다음 동작한 결과를 리턴
  } //배열을 따로 선언하지 않아도 프로미스all은 배열에 담기는 특징이 있다.

readAllUsers()

module.exports = {
  readAllUsers
}

//Promise 형태로 리턴되어야 합니다
//Promise.all을 사용해서 풀어야 합니다
// user1.json의 내용과 user2.json 내용을 합쳐 객체로 리턴되어야 합니다


/*
//promise.all(여기 JSON.parse()가 들어가면 오류가 납니다)
//SyntaxError: Unexpected token o in JSON at position 1 at JSON.parse (<anonymous>)
let promiseOne = getDataFromFilePromise(user1Path);
let promiseTwo = getDataFromFilePromise(user2Path);
return Promise.all([ JSON.parse(promiseOne), JSON.parse(promiseTwo)]).then((datas) => {return datas});
*/