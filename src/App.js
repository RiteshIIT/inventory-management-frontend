import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './SignUp';
import Homepage from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/sign-up'>
            <SignUp />
          </Route>
          <Route exact path='/home'>
            <Homepage/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
