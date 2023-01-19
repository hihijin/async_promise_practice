const { json } = require('express');
const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 및 getDataFromFilePromise(user2Path)를 이용해 작성합니다
const readAllUsersChaining = () => {
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  let arr = []; //객체가 담길 배열을 선언
  return getDataFromFilePromise(user1Path)//promise객체의 인자로 user1Path를 받아서 나온 결과를 리턴
    .then((data) => { //user1Path의 결과데이터를 data로 선언
      arr.push(JSON.parse(data)) //문자열인 data를 객체로 바꾸고 배열arr에 넣어준다.
      return getDataFromFilePromise(user2Path)//promise객체의 인자로 user2Path를 받아서 나온 결과를 리턴
    })
    .then((data2) => { //user2Path의 결과데이터를 data2로 선언
      arr.push(JSON.parse(data2)) //문자열인 data2를 객체로 바꾸고 배열arr에 넣어준다.
      return arr
    })
};

readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}

//체이닝의 결과가 프로미스 형태로 리턴되어야 합니다.
//user1.json의 내용과 user2.json 내용을 합쳐 배열로 리턴되어야 합니다
//fs module을 직접 사용하지 말고, getDataFromFilePromise을 두 번 사용해야 합니다
//Promise.all 또는 async/await을 사용하지 않고 풀어보세요
//파일 읽기의 결과가 문자열이므로, JSON.parse 를 사용해야 문제를 해결할 수 있습니다.
