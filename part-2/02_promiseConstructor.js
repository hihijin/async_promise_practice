const fs = require("fs");//"fs"(파일 시스템) 모듈을 불러옵니다
//require : 다른 파일을 불러오는 방법
const { resolve } = require("path"); //"path"모듈(폴더와 파일의 경로를 지정해주는 모듈)을 불러온다. 

const getDataFromFilePromise = filePath => { //화살표함수에서 인자로 파일명을 전달해주고 함수이름 getDataFromFilePromise선언
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
    return new Promise((resolve, reject) => {//프로미스 객체 생성과 동시에 콜백함수 resolve, reject 실행
      fs.readFile(filePath, 'utf8', (err, data) => {//fs파일모듈 불러와서
        if (err) {//에러가 나면
          reject(err);//reject함수에 err를 인자로 실행
        }
        else resolve(data); //정상작동하면 resolve함수에 data를 인자로 실행
      });
    });
  };

getDataFromFilePromise('README.md').then(data => console.log(data))
.catch(err => console.log(err));
//읽기전용파일로 함수를 실행한 결과가 정상이면 then메서드로 결과인 data를 콘솔에 찍어준다.
//에러가나면 catch메서드 받아온 err를 콘솔에 찍어준다

module.exports = {
  getDataFromFilePromise
};

//프로미스 형태로 리턴되어야 합니다.
//then 블록을 통하여 파일 내용이 전달되어야 합니다.
//에러가 발생할 경우, catch 블록을 통하여 에러 객체가 전달되어야 합니다.

