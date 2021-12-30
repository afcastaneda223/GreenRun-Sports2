import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Onboarding() {
  return (
    <>
      <Card className="border-0">
        <Card.Img variant="top" src="https://www.thesportsdb.com/images/media/player/cutout/9s8opt1628844333.png" />
        <Card.Body>
          <Card.Title className="mt-3">Discover Your Best</Card.Title>
          <Card.Title>Sport With Us</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
          </Card.Text>
          <Link to="/login" className="btn btn-primary mt-4 rounded-pill">
            <p className="m-1">Login</p>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Onboarding;
