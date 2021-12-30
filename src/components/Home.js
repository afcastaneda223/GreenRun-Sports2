/* eslint-disable */
import React, { useState } from 'react';
import { Card, Button, Alert, NavDropdown, ButtonGroup, Dropdown, NavItem } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from "axios";

function Home() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  
  let reqOptions = {
    url: "https://www.thesportsdb.com/api/v1/json/2/all_sports.php",
    method: "GET",
  }
  
  axios.request(reqOptions).then(function (response) {
    console.log(response.data);
  })

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
        <Card.Img variant="top" src="https://www.thesportsdb.com/images/media/player/cutout/9s8opt1628844333.png" />
        <Card.Body className="d-flex align-items-center justify-content-center my-5">
          {error && <Alert variant="danger">{error}</Alert>}
          <Button className="rounded-pill" type="submit">X</Button>
          <Button className="rounded-pill" type="submit">like</Button>
        </Card.Body>
        <Card.Body className="onbordtextbg1 m-3 d-flex justify-content-between">
          <NavItem>
            <Link to="/home"><i className="fas fa-home mt-3 fs-4"></i></Link>
          </NavItem>
          <NavItem>
            <Link to="/historial"><i className="fas fa-clock mt-3 fs-4"></i></Link>
          </NavItem>
          <NavItem>
            <Link to="/notes"><i className="fas fa-calendar mt-3 fs-4" ></i></Link>
          </NavItem>
          <NavItem>
            <NavDropdown
              as={ButtonGroup}
              key={'up'}
              id={`dropdown-button-drop-${'up'}`}
              drop={'up'}
              variant="primary"
              title={<i className="fas fa-user"></i>}
              className="d-flex justify-content-end fs-4"
              >
              <Dropdown.Item eventKey="1">
                { currentUser.email.split('@')[0] }
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2">
                <Link to="/update-profile" className="w-100 btn btn-success">Update Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="3">
                <Button className="w-100 btn btn-danger" onClick={handleLogout}>Log out</Button>
              </Dropdown.Item>
            </NavDropdown>
          </NavItem>
        </Card.Body>
    </>

  );
}

export default Home;
