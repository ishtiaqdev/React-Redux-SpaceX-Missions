const defaultState = {
    launches: [],
    backupLaunches: [],
    endpointResponse: {},
    isSearched: false,
    errors:{}
  }
  
  export default (state=defaultState, action={}) => {
    switch (action.type) {
      case 'FETCH_LAUNCHES_FULFILLED': {
        return {
          ...state,
          launches: action.payload,
          backupLaunches: action.payload,
          errors: {}
        }
      }

      case 'FETCH_LAUNCHES_FROM_STATE': {
        state.launches = state.backupLaunches;
        const filteredLaunches = state.launches.filter(launch => {
            return launch.mission_name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1 || 
            launch.launch_date_utc.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
        });
        return {
          ...state,
          launches: filteredLaunches,
          isSearched: true,
          errors: {}
        }
      }

      case 'SEND_LAUNCH_INFO': {
        return {
          ...state,
          endpointResponse: action.payload,
          errors: {}
        }
      }

      case 'FETCH_LAUNCHES_PENDING': {
        return {
          ...state,
          loading: true,
          errors: {}
        }
      }
  
      case 'FETCH_LAUNCHES_REJECTED': {
        return {
          ...state,
          loading: false,
          errors: { global: action.payload.message }
        }
      }
  
      default:
        return state;
    }
  }
  