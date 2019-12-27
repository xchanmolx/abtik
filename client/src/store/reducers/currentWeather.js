import * as actionTypes from '../actions/actionTypes';

const initialState = {
    weather: null,
    cityList: [],
    newCityName: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CITYLIST: return getCityList(state, action);
        default: return state;
    }
};

export default reducer;
