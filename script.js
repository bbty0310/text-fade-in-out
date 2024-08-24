let target = document.querySelector('#dynamic');

//초기값
let stringArr = [
  'Learn to HTML',
  'Learn to CSS',
  'Learn to Python',
  'Learn to JavaScript',
  'Learn to C/C++',
];

let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split('');

// 랜덤 문자열 선택
function randomString() {
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];

  return selectString.split('');
}

// 출력한 글자 초기화 및 재출력
function resetTyping() {
  target.textContent = '';
  dynamic(randomString());
}

function deleteTyping(randomArr) {
  if (randomArr.length > 0) {
    randomArr.pop();
    target.textContent = randomArr.join('');
    setTimeout(function () {
      deleteTyping(randomArr);
    }, 80);
  } else {
    setTimeout(function () {
      resetTyping();
    }, 1000);
  }
}

//0.08초마다 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(function () {
      deleteTyping(target.textContent.split(''));
    }, 2000);
  }
}

dynamic(selectStringArr);

//깜박임 함수
function blink() {
  target.classList.toggle('active');
}

//blink함수를 0.5초마다 반복 실행
setInterval(blink, 500);
