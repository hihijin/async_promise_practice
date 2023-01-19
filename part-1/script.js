let player = document.querySelector('#player');
let title = document.querySelector('#title');

let btnCallback = document.querySelector('#btnCallback');
btnCallback.onclick = runCallback;

let btnPromise = document.querySelector('#btnPromise');
btnPromise.onclick = runPromise;

let btnAsync = document.querySelector('#btnAsync');
btnAsync.onclick = runAsync;

function runCallback() {
  resetTitle();
  playVideo();

  delay(1000, () => {
    pauseVideo();
    displayTitle();

    delay(500, () => {
      highlightTitle();

      delay(2000, resetTitle);
    });
  });
}
/*
function runPromise() {
  resetTitle();
  playVideo();

  sleep(1000).then(() => {
    pauseVideo();
    displayTitle();
  })
    .then(sleep.bind(null, 500))
    .then(highlightTitle)
    .then(sleep.bind(null, 2000))
    .then(resetTitle)
}
*/
function runPromise() {
  resetTitle();
  playVideo();

  sleep(1000)
    .then((param) => {
      console.log(param);
      pauseVideo();
      displayTitle();
      return "world";
    })
    .then((param) => {
      console.log(param);
      return sleep(5000);
    })
    .then(highlightTitle)
    .then(sleep.bind(null, 2000))
    .then(resetTitle)
    .catch(err => {
      console.log(err);
    })
}

async function runAsync() {
  resetTitle();
  playVideo();

  await sleep(1000);
  pauseVideo();
  displayTitle();

  await sleep(500);
  highlightTitle();

  await sleep(2000);
  resetTitle();
}


function resetTitle() {
  log('제목을 초기화합니다');
  title.classList.remove('visible', 'highlight');
}

function playVideo() {
  log('영상을 재생합니다');
  player.play();
}

function pauseVideo() {
  log('영상을 멈춥니다');
  player.pause();
}

function displayTitle() {
  log('제목을 표시합니다');
  title.classList.add('visible');
}

function highlightTitle() {
  log('제목을 강조합니다');
  title.classList.add('highlight');
}

function log(message) {
  let logger = document.querySelector('#logger');
  let l = document.createElement('div');
  l.textContent = `[${new Date().toISOString().slice(11, -5)}] ${message}`;
  logger.prepend(l);
}


//Promise 실행 함수가 가지고 있는 두 개의 파라미터 resolve 와 reject 는 각각 무엇을 의미하나요?
//Promise의 비동기 처리를 수행할 콜백함수(executor)
//`Promise 객체`가 생성되면 `executor`는 자동으로 실행되고 작성했던 코드들이 실행되는데,
//코드가 정상적으로 처리가 되었다면 `resolve 함수`를 호출,
//에러가 발생했을 경우에는 `reject 함수`를 호출


// resolve, reject함수에는 인자를 넘길 수 있습니다. 이때 넘기는 인자는 어떻게 사용할 수 있나요?
//then, catch
//코드가 정상적으로 처리되면  resolve의 인자에 값을 전달할 수도 있다. resolve(value);
//콘솔에 value가뜨면 정상처리되었다고 알 수 있다.
//코드에 에러가 발생하면 reject의 인자에 에러메세지를 전달할 수도 있다 reject(error);
//콘솔에 error가 뜨면 중간에 에러가 발생해서 코드가 멈췄다는 것을 알 수 있다.


//new Promise()를 통해 생성한 Promise 인스턴스에는 어떤 메서드가 존재하나요? 각각은 어떤 용도인가요?
//new Promise가 반환하는 Promise 객체는 state, result 내부 프로퍼티를 갖는다.
//하지만 직접 접근할 수 없고 .then, .catch, .finally메서드를 사용해야 접근이 가능하다.


// Promise.prototype.then 메서드는 무엇을 리턴하나요?
//프로미스 객체 리턴, 프로미스 체이닝 가능

//.then : .then의 인수인 함수를 실행(이행)한다.
//이행과 실패의 결과(실행결과,에러)를 모두 받을 수 있다.

//.finally :  성공,실패 여부와 상관 없이 절차를 마무리한다.
//.finally(f) ==  .then(f, f) 유사


// Promise.prototype.catch 메서드는 무엇을 리턴하나요?
//.catch : 에러가 발생한 경우만 다룬다.
//.catch(f) === .then(null,f) 완전히 일치
//에러처리는 .then(), .catch() 모두 가능하지만 가급적 .catch()로 에러를 처리하는게 더 효율적이다
//(catch가 더 많은 예외 처리 사항을 핸들링 할 수 있기 때문이다.)


//Promise의 세 가지 상태는 각각 무엇이며, 어떤 의미를 가지나요?
//기본 상태는 pending(대기), 비동기 처리 로직이 아직 완료되지 않은 상태
//비동기 처리를 수행할 콜백 함수(executor)가 성공적으로 작동했다면 fulfilled (이행)로 변경
//이행 상태가 되면 then()을 이용하여 처리 결과 값을 받을 수 있다.
//에러가 발생했다면 rejected (거부)가 된다.
//실패한 이유(실패 처리의 결과 값)를 catch()로 받을 수 있다.


//await 키워드 다음에 등장하는 함수 실행은 어떤 타입을 리턴할 경우에만 의미가 있나요?
/*
//프로미스 객체가 와야 한다
resolve()함수를 리턴해야만 실행된다.
reject함수는 에러메세지가 뜨고 중단된다.


1. async
async는 function 앞에 위치하고 function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환한다.
만약 프라미스가 아닌 값을 반환하더라도 이행 상태의 프라미스(resolved promise)로 값을 감싸 이행된 프라미스가 반환되도록 한다.
=> 즉, async가 붙은 함수는 반드시 프로미스를 반환하고, 프로미스가 아닌 것은 프로미스로 감싸 반환한다. 

2. await
1)await 키워드는 async함수 안에서만 동작한다.
`let value = await promise`
2)자바스크립트는 await 키워드를 만나면 프로미스가 처리될 때까지 기다린다. 그리고 그 후 결과가 반환된다.
3)await 키워드 다음 추가 동작코드가 있을 시, await 키워드가 작성된 코드가 동작하고 그 다음에 다음 순서의 코드가 동작한다.
await는 promise.then보다 좀 더 세련되게 프라미스의 result 값을 얻을 수 있도록 해주는 문법. promise.then보다 가독성 좋고 쓰기도 쉽다.
*/


//await 키워드를 사용할 경우, 어떤 값이 리턴되나요?
/*
//프로미스 객체의 result값
sleep()함수의 return 값인 "hello"가 리턴됨

await 문은 Promise가 fulfill되거나 reject 될 때까지 async 함수의 실행을 일시 정지하고,
Promise가 fulfill되면 async 함수를 일시 정지한 부분부터 실행한다. 이 때 await 문의 반환값은 Promise 에서 fulfill된 값이 된다.
만약 Promise가 reject되면, await 문은 reject된 값을 throw한다.
await 연산자 다음에 나오는 문의 값이 Promise가 아니면 해당 값을 resolved Promise로 변환시킵니다.
*/