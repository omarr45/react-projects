//ts-check
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import CardsList from './components/CardsList';
import GameOfLife from './components/games/GameOfLife/GameOfLife';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Tasks from './components/games/TasksApp/Tasks';

const App = () => {
  return (
    <div className='App'>
      <Helmet>
        <meta
          name='description'
          content='Collection of projects developed using React JS and various libraries'
        />
      </Helmet>

      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={CardsList} />
          <Route exact path='/game-of-life' component={GameOfLife} />
          <Route exact path='/tasks' component={Tasks} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
