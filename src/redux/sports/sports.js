const LIKE_SPORT = 'LIKE_SPORT';
const UNLIKE_SPORT = 'UNLIKE_SPORT';
const GET_SPORTS = 'GET_SPORTS';
const initialState = [];

export const likeSport = (payload) => ({
  type: LIKE_SPORT,
  payload,
});

export const unlikeSport = (payload) => ({
  type: UNLIKE_SPORT,
  payload,
});

export const getSports = (payload) => ({
  type: GET_SPORTS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_SPORT:
      return state.map((sport) => {
        if (sport.id !== parseInt(action.payload, 10)) return sport;
        return { ...sport, liked: true };
      });
    case UNLIKE_SPORT:
      return state.map((sport) => {
        if (sport.id !== parseInt(action.payload, 10)) return sport;
        return { ...sport, liked: false };
      });
    case GET_SPORTS:
      return action.payload.sports.map((key) => ({
        id: key.idSport,
        sport_img: key.strSportThumb,
        sport_icon: key.strSportIconGreen,
        liked: false,
      }));
    default:
      return state;
  }
};

export default reducer;
