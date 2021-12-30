/* eslint-disable */
import React, { useState } from 'react';
import { Card, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Menu from './Menu';

function Notes() {

  return (
    <>
        <Card.Body className="d-flex align-items-center justify-content-center my-5">
          Notes
        </Card.Body>
        <Menu />
    </>

  );
}

export default Notes;