/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import axios from "axios";
import Menu from './Menu';
import { getSports, likeSport, unlikeSport } from '../redux/sports/sports';


function Home() {
  const dispatch = useDispatch();
  const sportsArray = useSelector((state) => state.sports);

  let reqOptions = {
    url: "https://www.thesportsdb.com/api/v1/json/2/all_sports.php",
    method: "GET",
  }

  useEffect(() => {
    const apiSports = async () => {
      axios.request(reqOptions).then(function (sports) {
        return dispatch(getSports(sports.data));
      })
    };
    if (sportsArray.length === 0) {
      apiSports();
    }
  }, []);

  const like = (e) => {
    dispatch(likeSport(e.target.id));
  };

  const unlike = (e) => {
    dispatch(unlikeSport(e.target.id));
  };


  return (
    <>
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
