import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const { theme, toggleTheme } = this.props;

    return (
      <nav className={`navbar fixed-top navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsNova</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>
            </ul>

            <button className="btn btn-outline-secondary" onClick={toggleTheme}>
              {theme === 'dark' ? '☀ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
