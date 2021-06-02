//ts-check
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import CardsList from './components/CardsList';
import GameOfLife from './components/games/GameOfLife/GameOfLife';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={CardsList} />
          <Route exact path='/game-of-life' component={GameOfLife} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
