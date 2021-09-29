const Navbar = ({ score, isStarted }) => {
  const maxScore = localStorage.getItem('maxScore') && localStorage.getItem('maxScore')

  return (
    <nav className="navbar navbar-light bg-dark" style={{ height: "50px" }}>
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="https://github.com/Ksooft" rel="noopener noreferrer">Github</a>
        <span className="navbar-brand mb-0 h1 text-white">{isStarted ? score : '1+2=3'}</span>
        <span className="navbar-brand mb-0 fs-5 text-white record">Рекорд: {maxScore}</span>
      </div>
    </nav>
  )
}

export default Navbar
