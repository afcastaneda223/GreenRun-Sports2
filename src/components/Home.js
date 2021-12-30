/* eslint-disable */
import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Home() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();


  async function handleLogout() {
    setError('')

    try {
        await logout()
        history.push('/')
    } catch{
        setError('Failed to Log Out')
    }
  }

  return (
    <>
      <Card className="bg1">
        <Card.Img variant="top" src="https://www.thesportsdb.com/images/media/player/cutout/9s8opt1628844333.png" />
        <Card.Body className="d-flex align-items-center justify-content-center my-5">
          {error && <Alert variant="danger">{error}</Alert>}
          <Button className="rounded-pill" type="submit">X</Button>
          <Button className="rounded-pill" type="submit">like</Button>
        </Card.Body>
        <Card.Body className="onbordtextbg1 m-3">
          <Button className="rounded-pill" onClick={handleLogout}>Log out</Button>
          <strong>Email:</strong>
          {' '}
          { currentUser.email }
        </Card.Body>
      </Card>

    </>

  );
}

export default Home;
