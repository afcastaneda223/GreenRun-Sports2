const PICK_INGREDIENT = 'PICK_INGREDIENT';
const GET_INGREDIENTS = 'GET_INGREDIENTS';
const SELECT_INPUT = 'SELECT_INPUT';
const initialState = {
  array: [],
  ingredient: null,
  input: '',
};

export const getIngredients = (payload) => ({
  type: GET_INGREDIENTS,
  payload,
});

export const pickIngredient = (payload) => ({
  type: PICK_INGREDIENT,
  payload,
});

export const selectInput = (payload) => ({
  type: SELECT_INPUT,
  payload,
});

const createArray = (x) => x.map((key) => ({
  Ingredient: key.strIngredient1,
}));

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PICK_INGREDIENT:
      return { ...state, ingredient: action.payload };

    case SELECT_INPUT:
      return { ...state, input: action.payload };

    case GET_INGREDIENTS:
      return { ...state, array: createArray(action.payload.drinks) };

    default:
      return state;
  }
};

export default reducer;
