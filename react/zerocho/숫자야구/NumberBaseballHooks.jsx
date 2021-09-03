// hooks, require, module.exports
const React = require('react');
const Try = require('./Try');
const { useState, useRef } = require('react');

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseballHooks = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(answer);
    if (value === answer.join('')) {
      setTries((t) => {
        return ([...t,
        {
          try: value,
          result: '홈런!',
        }
        ])
      });
      setResult('홈런');
      alert('게임을 다시 실행합니다.');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
      inputEl.current.focus();
    } else {
      const answerArray = value.split('').map((v) => parseInt(v)); // parseInt(v) : v를 정수로 반환
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join('')} 였습니다!`);
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
        inputEl.current.focus();
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        // setTries((prevTries) => {
        //   return [...prevTries, { try: value, result: `${strike} 스트라이크 ${ball} 볼입니다.` }];
        // });
        setTries((t) => {
          return ([...t,
          {
            try: value,
            result: `${strike} 스트라이크 ${ball} 볼입니다.`,
          }
          ])
        });
        setValue('');
        inputEl.current.focus();
      }
    }
    console.log(tries);
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력 !</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return (
            <Try key={`${i + 1}차 시도`} tryInfo={v} />
          );
        })}
      </ul>
    </>
  );
};

module.exports = NumberBaseballHooks;