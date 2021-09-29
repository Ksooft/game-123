import { useState, useRef } from 'react'
import Navbar from './components/Navbar';
import calc from './assets/img/calculate.png'
import Answer from './components/Answer';
import StartGame from './components/StartGame';

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const [example, setExample] = useState('3-1=?')
  const [answer, setAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const idTimeInterval = useRef()
  const idInterval = useRef()
  const startTime = useRef()

  const btnStart = () => {
    setIsStarted(true)
    setIsClick(false)
    console.log('игра началась');
    setScore(0)
    setExample(generateExample()) 
  }

  const handleAnswer = num => {
    if (num === answer && !isClick) {
      setIsClick(true)
      countScore()
      
      cleaning()
      setExample(example.replace('?', answer))
      document.querySelector('.header-game img').classList.add('es')
      document.querySelector('.header-game span').classList.add('right')
      setTimeout(() => {
        startTime.current = Date.now()
        document.querySelector('.header-game img').classList.remove('es')
        document.querySelector('.header-game span').classList.remove('right')
        let newExample = generateExample()
        const cleanExample1 = newExample.slice(0, newExample.length - 2)
        const cleanExample2 = example.slice(0, example.length - 2)
        if (cleanExample1 === cleanExample2 || cleanExample1.split('').reverse().join('') === cleanExample2 ) {
          while (newExample === example) {
            newExample = generateExample()
          }
          setExample(newExample)
        } else {
          setExample(newExample)
        }

        document.querySelectorAll('.answer-bar').forEach(el => {
          el.classList.add('animate')
        });

        const timeInterval = setInterval(() => {
          let timePassed = Date.now() - startTime.current;
          if (timePassed >= 4200) {
            console.log('не успел')
            endGame()
          }
        }, 1);
        idTimeInterval.current = timeInterval

        const timerPercent = setInterval(() => {
          const maxWidth = window.getComputedStyle(document.querySelector('.answer-block')).width
          const numMaxWidth = parseInt(maxWidth.match(/\d+/)).toFixed()
          const width = window.getComputedStyle(document.querySelector('.answer-bar')).width
          const numWidth = parseInt(width.match(/\d+/))
          const percent = ((numWidth * 100) / numMaxWidth).toFixed()
          if (percent <= 50) {
            document.querySelectorAll('.answer-text').forEach(el => {
              el.classList.add('half')
            });
          }
        }, 10);
        idInterval.current = timerPercent
        setIsClick(false)
      }, 1600);
    } else if (num !== answer && !isClick) {
      endGame()
    }
  }

  const countScore = () => {
    if (score < 35) {
      const extra = randomInteger(4, 6)
      
      if (!localStorage.getItem('maxScore')) {
        localStorage.setItem('maxScore', score + extra)
      } else if (localStorage.getItem('maxScore')) {
        (score + extra) > localStorage.getItem('maxScore') && localStorage.setItem('maxScore', score + extra)
      }
      setScore(score + extra)
    } else if (score > 35) {
      const extra = randomInteger(6, 10)
      
      if (!localStorage.getItem('maxScore')) {
        localStorage.setItem('maxScore', score + extra)
      } else if (localStorage.getItem('maxScore')) {
        (score + extra) > localStorage.getItem('maxScore') && localStorage.setItem('maxScore', score + extra)
      }
      setScore(score + extra)
    }
  } 

  const endGame = () => {
    setIsClick(true)
    document.querySelector('.header-game img').classList.add('wrong')
    clearInterval(idTimeInterval.current)
    
    clearInterval(idInterval.current)
    setTimeout(() => {
      document.querySelector('.header-game img').classList.remove('wrong')
      document.querySelectorAll('.answer-text').forEach(el => {
        el.classList.remove('half')
      });
      document.querySelectorAll('.answer-bar').forEach(el => {
        el.classList.remove('animate')
      });
      setIsStarted(false)
      setScore(0)
      console.log('игра закончена');
    }, 1500);
  }

  const generateExample = () => {
    let answer = null
    let num1 = null
    let num2 = null
    let num3 = null
    let num4 = null
    let sign = ''
    let signNum = ''
    if (score < 31) {
      while ([1, 2, 3].indexOf(answer) === -1) {
        num1 = randomInteger(1, 3)
        num2 = randomInteger(1, 3)
        sign = randomInteger(1, 2) === 1 ? '+' : '-'
        if (sign === '+') {
          answer = num1 + num2
        } else if (sign === '-') {
          answer = num1 - num2
        }
        // console.log(answer, num1, num2, sign)
      }
      setAnswer(answer)
      return `${num1}${sign}${num2}=?`
    } else if (score > 31) {
      while ([1, 2, 3].indexOf(answer) === -1) {
        num1 = randomInteger(1, 3)
        num2 = randomInteger(1, 3)
        num3 = randomInteger(1, 3)
        num4 = randomInteger(1, 3)
        sign = randomInteger(1, 2) === 1 ? '+' : '-'
        signNum = randomInteger(1, 2) === 1 ? '+' : '-'
        if (sign === '+') {
          if (signNum === '+') {
           answer = num1 - num2 + num3 - num4
          } else if (signNum === '-') {
            answer = num1 - num2 - num3 + num4
          }
        } else if (sign === '-') {
          if (signNum === '+') {
            answer = -num1 + num2 - num3 + num4
          } else if (signNum === '-') {
            answer = -num1 + num2 + num3 - num4
          }
        }
      }
      setAnswer(answer)
      return `${sign === '-' ? '-' : ''}${num1}${sign === '+' ? '-' : '+'}${num2}${sign === '+' && signNum === '+' 
      ? '+' 
      : sign === '+' && signNum === '-' 
      ? '-'
      : sign === '-' && signNum === '+'
      ? '-'
      : sign === '-' && signNum === '-'
      && '+'}${num3}${sign === '+' && signNum === '+' 
      ? '-' 
      : sign === '+' && signNum === '-' 
      ? '+'
      : sign === '-' && signNum === '+'
      ? '+'
      : sign === '-' && signNum === '-'
      && '-'}${num4}=?`
    }
  }

  const randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }

  const cleaning = () => {
    if (idTimeInterval.current) {
      clearInterval(idTimeInterval.current)
      document.querySelectorAll('.answer-bar').forEach(el => {
        el.classList.remove('animate')
      });
    }
    if (idInterval.current) {
      clearInterval(idInterval.current)
      document.querySelectorAll('.answer-text').forEach(el => {
        el.classList.remove('half')
      });
    }
  }

  return (
    <>
      <Navbar score={score} isStarted={isStarted} />
      <div className="w-100 bg-info d-flex justify-content-center align-items-center" style={{ height: "calc(100vh - 50px)", userSelect: "none" }}>
          <div className="container">
              <div className="header-game text-center">
                <img src={calc} alt="calculate" style={{ width: "20vw" }} draggable="false" />
                <div className="text-white" style={{ fontSize: "5.5vw ", fontWeight: 500 }}>{example.slice(0, example.length - 1)}<span>{example[example.length - 1]}</span></div>
              </div>
              <div className="answer-block" style={{ maxWidth: "450px", margin: "0 auto" }}>
                <Answer num={1} handleAnswer={handleAnswer} />
                <Answer num={2} handleAnswer={handleAnswer} />
                <Answer num={3} handleAnswer={handleAnswer} />
              </div>
          </div>
      </div>
      <StartGame isStarted={isStarted} btnStart={btnStart} />
    </>
  );
}

export default App;
