import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/sign-up'>
            <SignUp />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
