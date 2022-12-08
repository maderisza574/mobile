const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_BY_ID_PENDING': {
      return {
        ...state,
        data: [],
      };
    }
    case 'GET_USER_BY_ID_FULFILLED': {
      return {
        ...state,
        data: action.payload.data.data,
      };
    }
    case 'GET_USER_BY_ID_REJECTED': {
      return {
        ...state,
        data: [],
      };
    }
    case 'UPDATE_USER_BY_ID_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'UPDATE_USER_BY_ID_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: '',
      };
    case 'UPDATE_USER_BY_ID_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
      };
    default: {
      return state;
    }
  }
};

export default user;
