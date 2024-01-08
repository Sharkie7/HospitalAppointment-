import * as actionTypes from "../types";
const initialState = {
  authenticated: false,
  userDetails: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        authenticated: true,
        userDetails: action.payload,
      };

    case actionTypes.LOGOUT:
      return initialState;

    default:
      return state;
  }
}
