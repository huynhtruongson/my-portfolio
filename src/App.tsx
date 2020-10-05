import MediaLink from 'components/MediaLink';
import AboutPage from 'pages/About';
import EducationPage from 'pages/Education';
import SkillsPage from 'pages/Skills';
import WorkPage from 'pages/Work';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navigator from './components/Navigator';

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Navigator/>
          <MediaLink/>
          <Switch>
            <Route path='/about' component={AboutPage}/>
            <Route path='/skills'component={SkillsPage}/>
            <Route path='/work' component={WorkPage}/>
            <Route path='/education' component={EducationPage}/> 
          </Switch>  
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
