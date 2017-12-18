import constants from '../constants/index'

const initialState = {
    stories: [],
    isLoading: false,
    error: null
}

export default (state = initialState, action) => {
  switch (action.type) {

  case constants.GET_STORIES_SUCCESS:
    return { 
        ...state,
        stories: action.stories
    }
  case constants.SET_STORIES_LOADING:
    return { 
        ...state,
        isLoading: action.isLoading
    }

  default:
    return state
  }
}
