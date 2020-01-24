import localResults from "./api/sampleIssues.json";

import { UPDATE_FILTER } from "./actiions/FilterActions";

const initialState = {
  filterValue: "",
  results: localResults
};

const reducer = (state = initialState, action) => {
  switch (action?.type) {
    case UPDATE_FILTER:
      return { ...state, filterValue: action.payload };
    default:
      return state;
  }
};

export default reducer;
