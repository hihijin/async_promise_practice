const fs = require("fs");//"fs"(파일 시스템) 모듈을 불러옵니다
//require : 다른 파일을 불러오는 방법

const getDataFromFile = function (filePath, callback) { //파일명과 콜백함수를 인자로 받은 함수 getDataFromFile를 선언
  // TODO: fs.readFile을 이용해 작성합니다
  fs.readFile(filePath, 'utf8', (err, data) => { //fs.readFile메서드(파일명, 옵션, 콜백함수(인자로 err, data를 받음)) 실행
    if (err) {//에러가 나면
      callback(err, null); //콜백함수 인자로 에러, null을 받는다.
    }
    else callback(null, data);//정상적으로 작동하면 콜백함수에 인자로 null,data를 받는다.
  });
};

getDataFromFile('README.md', (err, data) => console.log(err, data));
//에러로 동작하면 콘솔에 에러만 나오고 data는 null
//정상으로 동작하면 콘솔에 data만 나오고 에러는 null

module.exports = {
  getDataFromFile
};

//파일을 읽고나서 콜백이 실행되어야 합니다
//에러가 발생할 경우 콜백 첫번째 인자에 에러 객체가 전달되어야 합니다.
//콜백 두번째 인자에 파일 내용이 전달되어야 합니다.
