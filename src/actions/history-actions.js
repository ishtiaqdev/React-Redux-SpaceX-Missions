import axios from 'axios';

const historyUrl = 'https://api.spacexdata.com/v3/history';

export function fetchHistories() {
  return dispatch => {
    return axios.get(historyUrl)
      .then((res) => {
        dispatch({
          type: 'FETCH_HISTORIES_FULFILLED', 
          payload: res.data
        });
      })
  };
}