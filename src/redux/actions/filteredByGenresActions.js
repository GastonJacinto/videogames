import { FILTERED_BY_GENRES } from "./actionTypes";


export function filteredByGenre(genre) {
  return async function (dispatch) {
    try {
     dispatch({
  type: FILTERED_BY_GENRES,
  payload: genre
})
    } catch (error) {
      console.log(error)
    }
  };
}