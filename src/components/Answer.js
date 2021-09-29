const Answer = ({ num, handleAnswer }) => {
  return (
    <div className="answer" onClick={() => handleAnswer(num)}>
      <div className="answer-bar">{num}</div>
      <div className="answer-text text-white">{num}</div>
    </div>
  )
}

export default Answer
