import api from "../../utils/api";
import * as types from "../../constants/category";

export const fetchCategoryRequest = payload => ({
  payload,
  type: types.CATEGORY_REQUEST
});

export const fetchCategoryFailure = payload => ({
  payload,
  type: types.CATEGORY_FAILURE
});

export const fetchCategorySuccess = payload => ({
  payload,
  type: types.CATEGORY_SUCCESS
});



const fetchCategories = ({ payload }) => dispatch => {
  dispatch(fetchCategoryRequest(payload))
  api
    .fetchCategories(payload)
    .then(response => {
      dispatch(fetchCategorySuccess(response));
    })
    .catch(error => {
      dispatch(fetchCategoryFailure(error));
    });
};

export default fetchCategories;