/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from 'react';
import {
  Form, Button, Card, Alert,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function UpdateProfile() {
  const emailRef = useRef();
  const newPasswordRef = useRef();
  const newPasswordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (newPasswordRef.current.value !== newPasswordConfirmRef.current.value) {
      return setError('Password do not match');
    }

    const promises = [];
    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (newPasswordRef.current.value) {
      promises.push(updatePassword(newPasswordRef.current.value));
    }

    Promise.all(promises).then(() => {
      history.push('/home');
    }).catch(() => {
      setError('Failed to update account');
    }).finally(() => {
      setLoading(false);
    });
    return true;
  }

  return (
    <>
      <Card.Body className="m-5">
        <h2 className="text-center mb-4">Update Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Control type="email" ref={emailRef} required placeholder="Email" className="mb-4 formborder1" defaultValue={currentUser.email} />
          </Form.Group>
          <Form.Group id="password" className="mb-3">
            <Form.Control type="new-password" ref={newPasswordRef} placeholder="New Password" className="formborder1" />
            <Form.Text className="text-muted">
              Leave blank to keep the same
            </Form.Text>
          </Form.Group>
          <Form.Group id="new-password-confirm" className="mb-3">
            <Form.Control type="password" ref={newPasswordConfirmRef} placeholder="New Password Confirmation" className="formborder1" />
            <Form.Text className="text-muted">
              Leave blank to keep the same
            </Form.Text>
          </Form.Group>
          <Button disabled={loading} className="mt-4 rounded-pill btn btn-danger" type="submit">Update Profile</Button>
        </Form>
      </Card.Body>
      <div className="w-100 text-center my-3">
        <Link to="/home">Cancel</Link>
      </div>
    </>
  );
}

export default UpdateProfile;
