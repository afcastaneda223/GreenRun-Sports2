/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import axios from "axios";
import Menu from './Menu';
import Slider from './Slider';
import { getSports, likeSport, unlikeSport } from '../redux/sports/sports';


function Home() {


  // const like = (e) => {
  //   dispatch(likeSport(e.target.id));
  // };

  // const unlike = (e) => {
  //   dispatch(unlikeSport(e.target.id));
  // };


  return (
    <>
        <Slider />
        <Card.Img variant="top" src="https://www.thesportsdb.com/images/media/player/cutout/9s8opt1628844333.png" />
        <Card.Body className="d-flex align-items-center justify-content-center my-5">
          <Button className="rounded-circle me-5 btn-danger fs-5" type="submit"><i className="fas fa-times-circle"></i></Button>
          <Button className="rounded-circle fs-2" type="submit"><i className="fas fa-heart"></i></Button>
        </Card.Body>
        <Menu />
    </>

  );
}

export default Home;
