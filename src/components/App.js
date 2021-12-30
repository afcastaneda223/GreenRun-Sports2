/* eslint-disable no-unused-vars */
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Signup from './Signup';
import Onboarding from './Onboarding';
import Login from './Login';
import Home from './Home';
import ForgotPassord from './ForgotPassord';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center mcont">
      <div className="w-100 scont">
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Onboarding} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/home" component={Home} />
              <Route path="/forgot-password" component={ForgotPassord} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
