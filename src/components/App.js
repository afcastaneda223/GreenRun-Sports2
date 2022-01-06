/* eslint-disable no-unused-vars */
import { Container, Card, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Signup from './Signup';
import Onboarding from './Onboarding';
import Login from './Login';
import Home from './Home';
import Notes from './Notes';
import Historial from './Historial';
import ForgotPassord from './ForgotPassord';
import PrivateRoute from './PrivateRoute';
import UpdateProfile from './UpdateProfile';

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center mcont m-0 p-0">
      <div className="w-100 scont">
        <Card className="bg1 border-0">
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={Onboarding} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/historial" component={Historial} />
                <PrivateRoute path="/notes" component={Notes} />
                <PrivateRoute path="/home" component={Home} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/forgot-password" component={ForgotPassord} />
              </Switch>
            </AuthProvider>
          </Router>
        </Card>
      </div>
    </Container>
  );
}

export default App;
