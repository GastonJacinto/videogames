import { FILTERED_BY_PLATFORMS } from "./actionTypes";


export function filteredByPlatform(platform) {
  return async function (dispatch) {
    try {
     dispatch({
  type: FILTERED_BY_PLATFORMS,
  payload: platform
})
    } catch (error) {
      console.log(error)
    }
  };
}