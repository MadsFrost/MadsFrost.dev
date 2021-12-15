import * as React from 'react';
import "tailwindcss/tailwind.css"
import { Navigation } from './Components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Projects } from './Pages/Projects';
import { Landing } from './Pages/Landing';
import styles from './App.module.css';
function App() {

  return (
    <div className={styles.appContainer}>
      <Router>
        <Navigation />
        <div className={'p-2 z-0'}>
          <Route exact path={'/'}>
            <Landing />
          </Route>
          <Route path={'/projects'}>
            <Projects />
          </Route>
        </div>
      </Router>
    </div>
      
  );
}

export default App;
