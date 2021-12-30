/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from 'react';
import {
  Form, Button, Card, Alert,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ForgotPassord() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your email inbox for instructions');
    } catch {
      setError('Failed to reset password');
    }
    setLoading(false);
    return true;
  }

  return (
    <>
      <Card.Body className="m-5">
        <h2 className="text-center">Password Reset</h2>
        <p className="text-center mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Control type="email" ref={emailRef} required placeholder="Email" className="mb-4 formborder2 text-white" />
          </Form.Group>
          <Button disabled={loading} className="mt-4 rounded-pill" type="submit">Reset Password</Button>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Form>
      </Card.Body>
      <div className="w-100 text-center my-3">
        Need a new account?
        {' '}
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

export default ForgotPassord;
