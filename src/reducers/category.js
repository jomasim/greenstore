import * as types from "../constants/category";

const initialState = {};
const categoryReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case types.CATEGORY_REQUEST: {
      return { ...state, ...action.payload  }
    }
    case types.CATEGORY_SUCCESS: {
      return { ...state , ...action.payload };
    }
    case types.CATEGORY_FAILURE: {
      return { ...state, ...action.payload  };
    }
    default:
      return state;
  }
};
export default categoryReducer;
