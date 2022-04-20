export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ''}>
      <img className="nav--logo_icon" src={props.image} alt="" />
      <h3 className="nav--logo_text">React Facts</h3>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.clickHandler}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  )
}