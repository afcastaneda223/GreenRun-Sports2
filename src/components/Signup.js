/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from 'react';
import {
  Form, Button, Card, Alert,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/home');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
    return true;
  }

  return (
    <>
      <Card className="border-0">
        <Card.Body className="m-5">
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control type="email" ref={emailRef} required placeholder="Email" className="text-center mb-4" />
            </Form.Group>
            <Form.Group id="password" className="mb-4">
              <Form.Control type="password" ref={passwordRef} required placeholder="Password" className="text-center mb-3" />
            </Form.Group>
            <Form.Group id="password-confirm" className="mb-4">
              <Form.Control type="password" ref={passwordConfirmRef} required placeholder="Password Confirmation" className="text-center mb-3" />
            </Form.Group>
            <Button disabled={loading} className="mt-4 rounded-pill" type="submit">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center">
        Already have an account?
        {' '}
        <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

export default Signup;
