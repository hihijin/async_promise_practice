const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

//path.join() : 여러 인자를 넣으면 하나의 경로로 합쳐줍니다. 상대경로인 ..(부모 디렉터리)과 .(현 위치)도 알아서 처리해줍니다.
//__dirname : 현재 실행하는 파일의 절대경로
const user1Path = path.join(__dirname, 'files/user1.json'); //user1.json파일과, __dirname을 하나의 경로로 합쳐준다.
const user2Path = path.join(__dirname, 'files/user2.json'); //user2.json파일과, __dirname을 하나의 경로로 합쳐준다.

const readAllUsersAsyncAwait = async () => { //async함수 사용
  // TODO: async/await 키워드를 이용해 작성합니다

  let arr = []; //객체가 담길 배열을 선언
  let data1 = await getDataFromFilePromise(user1Path); //promise객체의 인자로 user1Path를 받아서 나온 결과를 리턴
  arr.push(JSON.parse(data1));//결과값 문자열을 객체로 바꾸고 배열arr에 담기
  let data2 = await getDataFromFilePromise(user2Path); //promise객체의 인자로 user2Path를 받아서 나온 결과를 리턴
  arr.push(JSON.parse(data2));//결과값 문자열을 객체로 바꾸고 배열arr에 담기
  return arr;
}

readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}


//async 키워드를 사용한 함수는 AsyncFunction의 인스턴스입니다
//await 키워드만 이용해 배열이 리턴되어야 합니다
//user1.json의 내용과 user2.json 내용을 합쳐 배열로 리턴되어야 합니다