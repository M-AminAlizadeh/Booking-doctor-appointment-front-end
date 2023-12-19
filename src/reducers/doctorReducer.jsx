const initialState = {
  doctorsList: [],
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DOCTORS':
      return {
        ...state,
        doctorsList: action.payload,
      };
    default:
      return state;
  }
};

export default doctorReducer;
