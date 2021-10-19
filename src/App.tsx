import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import { Home, Projects, Contact, Login } from './pages';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/projects" exact component={() => <Projects />} />
        <Route path="/contact" exact component={() => <Contact />} />
        <Route path="/login" exact component={() => <Login />} />
      </Switch>
    </MainLayout>
  );
}

export default App;
