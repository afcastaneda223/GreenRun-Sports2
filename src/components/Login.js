/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from 'react';
import {
  Form, Button, Card, Alert,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/home');
    } catch {
      setError('Failed to Log In');
    }
    setLoading(false);
    return true;
  }

  return (
    <>
      <Card className="border-0 bg2">
        <Card.Body className="m-5">
          <h2 className="text-center">Welcome</h2>
          <p className="text-center mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control type="email" ref={emailRef} required placeholder="Email" className="mb-4 formborder2 text-white" />
            </Form.Group>
            <Form.Group id="password" className="mb-4">
              <Form.Control type="password" ref={passwordRef} required placeholder="Password" className=" mb-3 formborder2 text-white" />
            </Form.Group>
            <Button disabled={loading} className="mt-4 rounded-pill" type="submit">Login</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center">
        Need a new account?
        {' '}
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

export default Login;
