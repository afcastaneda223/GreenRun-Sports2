/* eslint-disable */
import React, { useState } from 'react';
import { Card, Button, Alert, NavDropdown, ButtonGroup, Dropdown } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
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
        <Card.Body className="onbordtextbg1 m-3 d-flex justify-content-end ">

          <div className="mb-2">
      <NavDropdown
        as={ButtonGroup}
        key={'up'}
        id={`dropdown-button-drop-${'up'}`}
        drop={'up'}
        variant="primary"
        title={<i class="fas fa-user"></i>}
        className="d-flex justify-content-end fs-4"
      >
        <Dropdown.Item eventKey="1">
          { currentUser.email.split('@')[0] }</Dropdown.Item>
          <Dropdown.Divider />
        <Dropdown.Item eventKey="2"><Link to="/update-profile" className="w-100 btn btn-success">Update Profile</Link></Dropdown.Item>
        <Dropdown.Item eventKey="3"><Button className="w-100 btn btn-danger" onClick={handleLogout}>Log out</Button></Dropdown.Item>
      </NavDropdown>
  </div>
        </Card.Body>
      </Card>  

    </>

  );
}

export default Home;
