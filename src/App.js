import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './login';
import Homepage from './Home';
import InventoryPage from './InventoryPage';
import Summary from './Summary';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/sign-up'>
            <SignUp />
          </Route>
          <Route exact path = '/login'>
          <LogIn/>
          </Route>
          <Route exact path='/home'>
            <Homepage/>
          </Route>
          <Route exact path='/inventory-page'>
            <InventoryPage/>
          </Route>
          <Route exact path='/summary'>
            <Summary/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
