import BtnStart from './BtnStart'

const StartGame = ({ isStarted, btnStart }) => {
  return (
    <div className={`start-game ${!isStarted && 'open'}`}>
      <div style={{ textAlign: "center" }}>
        <div className="h1 text-white pb-5">Думаешь это очень просто?</div>
        <BtnStart btnStart={btnStart} />
      </div>
    </div>
  )
}

export default StartGame
