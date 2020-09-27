const defaultState = {
  histories: [],
  loading: false,
  errors:{}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_HISTORIES_FULFILLED': {
      return {
        ...state,
        histories: action.payload,
        loading: false,
        errors: {}
      }
    }

    case 'FETCH_HISTORIES_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_HISTORIES_REJECTED': {
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
