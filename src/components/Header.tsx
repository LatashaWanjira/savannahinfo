import { Link } from 'react-router-dom'

const Header = () => {
  return (

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/">Reaction Homes</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link">All Users</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}

export default Header
