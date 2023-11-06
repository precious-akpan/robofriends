import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_FAILURE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants";

const initialRobotsState = {
  isPending: false,
  robots: [],
};

export function requestRobots(state = initialRobotsState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { isPending: false, robots: payload });
    case REQUEST_ROBOTS_FAILURE:
      return Object.assign({}, state, { isPending: true, error: payload });
    default:
      return state;
  }
}

const initialSearchState = {
  searchField: "",
};

export function searchRobots(state = initialSearchState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: payload });
    default:
      return state;
  }
}
