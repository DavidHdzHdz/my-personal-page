import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ResumePage from './components/resume/ResumePage'

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: '#3d5cba', height: '40px', color: '#ffffff' }}>
          <ul style={{
            display: 'flex', justifyContent: 'space-around', margin: '0', paddingTop: '10px',
            listStyle: 'none'
          }}>
            <li>
              <Link to='/' style={{ textDecoration: 'none', color: '#ffffff' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/resume' style={{ textDecoration: 'none', color: '#ffffff' }}>
                Resume
              </Link>
            </li>
            <li>
              <Link to='/portafolio' style={{ textDecoration: 'none', color: '#ffffff' }}>
                Portafolio
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className='principal-container'>
          <Switch>
            <Route path='/'>
              <ResumePage />
            </Route>
            <Route path='/resume'>
              <ResumePage />
            </Route>
            <Route path='/portafolio'>
              <ResumePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
