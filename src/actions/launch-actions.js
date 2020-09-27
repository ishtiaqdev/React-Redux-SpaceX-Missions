import axios from 'axios';

const launchUrl = 'https://api.spacexdata.com/v3/launches';

export function fetchLaunches() {
  return dispatch => {
    return axios.get(launchUrl)
      .then((res) => {
        dispatch({
          type: 'FETCH_LAUNCHES_FULFILLED', 
          payload: res.data
        });
      })
  };
}

export function fetchSearchedLaunches(searchFilter) {
    return dispatch => {
            dispatch({
              type: 'FETCH_LAUNCHES_FROM_STATE', 
              payload: searchFilter
            });
      };
  }
  
export function sendInformationToEndpoint(value) {
    return dispatch => {
        return axios.get(launchUrl + '?launch_year=' + value )
          .then((res) => {
            dispatch({
              type: 'SEND_LAUNCH_INFO', 
              payload: res.data
            });
          })
      };
  }