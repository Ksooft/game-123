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
        document.querySelector('.header-example').classList.add('swipe')
      }, 500);

      setTimeout(() => {
        document.querySelectorAll('.answer-bar').forEach(el => {
          el.style.removeProperty('width')
        })
        if (idInterval.current) {
          clearInterval(idInterval.current)
          document.querySelectorAll('.answer-text').forEach(el => {
            el.classList.remove('half')
          });
        }
        document.querySelector('.header-game img').classList.remove('es')
        document.querySelector('.header-game span').classList.remove('right')
       setTimeout(() => {
         let newExample = generateExample()
         console.log(newExample);
         const cleanExample1 = newExample.slice(0, newExample.length - 2)
         const cleanExample2 = example.slice(0, example.length - 2)
         if (cleanExample1 === cleanExample2 || cleanExample1.split('').reverse().join('') === cleanExample2 || cleanExample1 === cleanExample2.split('').reverse().join('')) {
           while (newExample === example) {
             newExample = generateExample()
           }
           setExample(newExample)
         } else {
           setExample(newExample)
         }

         setTimeout(() => {
           document.querySelector('.header-example').classList.remove('swipe')
           startTime.current = Date.now()
           document.querySelectorAll('.answer-bar').forEach(el => {
             el.classList.add('animate')
           });

           const timeInterval = setInterval(() => {
             let timePassed = Date.now() - startTime.current;
             if (timePassed >= 3600) {
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
           }, 1);
           idInterval.current = timerPercent
           setIsClick(false)
         }, 300);
       }, 300);
      }, 800);
    } else if (num !== answer && !isClick) {
      endGame()
    }
  }

  const countScore = () => {
    if (score <= 22) {
      const extra = randomInteger(3, 5)
      
      if (!localStorage.getItem('maxScore')) {
        localStorage.setItem('maxScore', score + extra)
      } else if (localStorage.getItem('maxScore')) {
        (score + extra) > localStorage.getItem('maxScore') && localStorage.setItem('maxScore', score + extra)
      }
      setScore(score + extra)
    } else if (score > 22) {
      const extra = randomInteger(5, 8)
      
      if (!localStorage.getItem('maxScore')) {
        localStorage.setItem('maxScore', score + extra)
      } else if (localStorage.getItem('maxScore')) {
        (score + extra) > localStorage.getItem('maxScore') && localStorage.setItem('maxScore', score + extra)
      }
      setScore(score + extra)
    } else if (score >= 55) {
      const extra = randomInteger(8, 11)

      if (!localStorage.getItem('maxScore')) {
        localStorage.setItem('maxScore', score + extra)
      } else if (localStorage.getItem('maxScore')) {
        (score + extra) > localStorage.getItem('maxScore') && localStorage.setItem('maxScore', score + extra)
      }
    }
  } 

  const endGame = () => {
    const width = window.getComputedStyle(document.querySelector('.answer-bar')).width
    setIsClick(true)
    document.querySelector('.header-game img').classList.add('wrong')
    clearInterval(idTimeInterval.current)
    document.querySelectorAll('.answer-bar').forEach(el => {
      el.classList.remove('animate')
      el.style.width = width
    })
    setTimeout(() => {
      clearInterval(idInterval.current)
      document.querySelectorAll('.answer-bar').forEach(el => {
        el.style.removeProperty('width')
      })
      document.querySelector('.header-game img').classList.remove('wrong')
      document.querySelectorAll('.answer-text').forEach(el => {
        el.classList.remove('half')
      });
      setTimeout(() => {
        setIsStarted(false)
        setScore(0)
        console.log('игра закончена');
      }, 200);
    }, 1500);
  }

  const generateExample = () => {
    let answer = null
    let num1 = null
    let num2 = null
    let num3 = null
    let num4 = null
    let sign = ''
    let sign2 = ''
    let sign3 = ''
    let sign4 = ''
    let text = ''
    if (score <= 22) {
      while ([1, 2, 3].indexOf(answer) === -1) {
        num1 = randomInteger(1, 3)
        num2 = randomInteger(1, 3)
        sign = randomInteger(1, 2) === 1 ? '+' : '-'
        sign2 = randomInteger(1, 2) === 1 ? '+' : '-'
        if (sign === '+') {
          if (sign2 === '+') {
            answer = num1 + num2
            text = `${num1}+${num2}=?`
          } else if (sign2 === '-') {
            answer = num1 - num2
            text = `${num1}-${num2}=?`
          }
        } else if (sign === '-') {
          if (sign2 === '+') {
            answer = -num1 + num2
            text = `-${num1}+${num2}=?`
          } else if (sign2 === '-') {
            answer = -num1 - num2
            text = `-${num1}-${num2}=?`
          }
        }
        // console.log(answer, num1, num2, sign)
      }
      setAnswer(answer)
    } else if (score > 22) {
      while ([1, 2, 3].indexOf(answer) === -1) {
        num1 = randomInteger(1, 3)
        num2 = randomInteger(1, 3)
        num3 = randomInteger(1, 3)
        sign = randomInteger(1, 2) === 1 ? '+' : '-'
        sign2 = randomInteger(1, 2) === 1 ? '+' : '-'
        sign3 = randomInteger(1, 2) === 1 ? '+' : '-'
        if (sign === '+') {
          if (sign2 === '+') {
            if (sign3 === '+') {
              answer = num1 + num2 + num3
              text = `${num1}+${num2}+${num3}=?`
            } else if (sign3 === '-') {
              answer = num1 + num2 - num3
              text = `${num1}+${num2}-${num3}=?`
            }
          } else if (sign2 === '-') {
              if (sign3 === '+') {
                answer = num1 - num2 + num3
                text = `${num1}-${num2}+${num3}=?`
              } else if (sign3 === '-') {
                answer = num1 - num2 - num3
                text = `${num1}-${num2}-${num3}=?`
              }
          }
        } else if (sign === '-') {
            if (sign2 === '+') {
              if (sign3 === '+') {
                answer = -num1 + num2 + num3
                text = `-${num1}+${num2}+${num3}=?`
              } else if (sign3 === '-') {
                answer = -num1 + num2 - num3
                text = `-${num1}+${num2}-${num3}=?`
              }
            } else if (sign2 === '-') {
              if (sign3 === '+') {
                answer = -num1 - num2 + num3
                text = `-${num1}-${num2}+${num3}=?`
              } else if (sign3 === '-') {
              answer = -num1 - num2 - num3
              text = `-${num1}-${num2}-${num3}=?`
              }
          }
        }
      }
      setAnswer(answer)
    } else if (score >= 55) {
      while ([1, 2, 3].indexOf(answer) === -1) {
        num1 = randomInteger(1, 3)
        num2 = randomInteger(1, 3)
        num3 = randomInteger(1, 3)
        num4 = randomInteger(1, 3)
        sign = randomInteger(1, 2) === 1 ? '+' : '-'
        sign2 = randomInteger(1, 2) === 1 ? '+' : '-'
        sign3 = randomInteger(1, 2) === 1 ? '+' : '-'
        sign4 = randomInteger(1, 2) === 1 ? '+' : '-'
        if (sign === '+') {
          if (sign2 === '+') {
            if (sign3 === '+') {
              if (sign4 === '+') {
                answer = num1 + num2 + num3 + num4
                text = `${num1}+${num2}+${num3}+${num4}=?`
              } else if (sign4 === '-') {
                answer = num1 + num2 + num3 - num4
                text = `${num1}+${num2}+${num3}-${num4}=?`
              }
            } else if (sign3 === '-') {
              if (sign4 === '+') {
                answer = num1 + num2 - num3 + num4
                text = `${num1}+${num2}-${num3}+${num4}=?`
              } else if (sign4 === '-') {
                answer = num1 + num2 - num3 - num4
                text = `${num1}+${num2}-${num3}-${num4}=?`
              }
            }
          } else if (sign2 === '-') {
            if (sign3 === '+') {
              if (sign4 === '+') {
                answer = num1 - num2 + num3 + num4
                text = `${num1}-${num2}+${num3}+${num4}=?`
              } else if (sign4 === '-') {
                answer = num1 - num2 + num3 - num4
                text = `${num1}-${num2}+${num3}-${num4}=?`
              }
            } else if (sign3 === '-') {
              if (sign4 === '+') {
                answer = num1 - num2 - num3 + num4
                text = `${num1}-${num2}-${num3}+${num4}=?`
              } else if (sign4 === '-') {
                answer = num1 - num2 - num3 - num4
                text = `${num1}-${num2}-${num3}-${num4}=?`
              }
            }
          }
        } else if (sign === '-') {
          if (sign2 === '+') {
            if (sign3 === '+') {
              if (sign4 === '+') {
                answer = -num1 + num2 + num3 + num4
                text = `-${num1}+${num2}+${num3}+${num4}=?`
              } else if (sign4 === '-') {
                answer = -num1 + num2 + num3 - num4
                text = `-${num1}+${num2}+${num3}-${num4}=?`
              }
            } else if (sign3 === '-') {
              if (sign4 === '+') {
                answer = -num1 + num2 - num3 + num4
                text = `-${num1}+${num2}-${num3}+${num4}=?`
              } else if (sign4 === '-') {
                answer = -num1 + num2 - num3 - num4
                text = `-${num1}+${num2}-${num3}-${num4}=?`
              }
            }
          } else if (sign2 === '-') {
            if (sign3 === '+') {
              if (sign4 === '+') {
                answer = -num1 - num2 + num3 + num4
                text = `-${num1}-${num2}+${num3}+${num4}=?`
              } else if (sign4 === '-') {
                answer = -num1 - num2 + num3 - num4
                text = `-${num1}-${num2}+${num3}-${num4}=?`
              }
            } else if (sign3 === '-') {
              if (sign4 === '+') {
                answer = -num1 - num2 - num3 + num4
                text = `-${num1}-${num2}-${num3}+${num4}=?`
              } else if (sign4 === '-') {
                answer = -num1 - num2 - num3 - num4
                text = `-${num1}-${num2}-${num3}-${num4}=?`
              }
            }
          }
        }
      }
    }
    return text
  }

  const randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }

  const cleaning = () => {
    const width = window.getComputedStyle(document.querySelector('.answer-bar')).width
    if (idTimeInterval.current) {
      clearInterval(idTimeInterval.current)
      document.querySelectorAll('.answer-bar').forEach(el => {
        el.classList.remove('animate')
        el.style.width = width
      });
    }
  }

  return (
    <>
      <Navbar score={score} isStarted={isStarted} />
      <div className="w-100 bg-info d-flex justify-content-center align-items-center" style={{ height: "calc(100vh - 50px)", userSelect: "none"}}>
          <div className="container">
              <div className="header-game text-center">
                <img src={calc} alt="calculate" style={{ width: "20vw" }} draggable="false" />
                <div className="text-white header-example">{example.slice(0, example.length - 1)}<span>{example[example.length - 1]}</span></div>
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
