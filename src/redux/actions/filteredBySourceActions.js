import { FILTERED_BY_SOURCE } from "./actionTypes";


export function filteredBySource(source) {
  return async function (dispatch) {
    try {
     dispatch({
  type: FILTERED_BY_SOURCE,
  payload: source
})
    } catch (error) {
      console.log(error)
    }
  };
}