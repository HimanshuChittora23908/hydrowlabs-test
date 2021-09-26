import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './login';
import Display from './display';

function App() {
  return (
    <>
    <div className="App">
      <Switch>
          <Route path="/hydrowlabs-tech/" exact component={Login} />
          <Route path="/hydrowlabs-tech/details" exact component={Display} />
          <Redirect to="/hydrowlabs-tech/" />
        </Switch>
    </div>
    </>
  );
}

export default App;