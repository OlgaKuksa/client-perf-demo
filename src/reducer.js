import localResults from "./api/sampleIssues.json";

import { UPDATE_FILTER } from "./actions/FilterActions";
import {UPDATE_COLOR_SCHEME} from "./actions/SchemeChangerActions"

const initialState = {
  filterValue: "",
  results: localResults,
  activeColorScheme: "green"
};

const reducer = (state = initialState, action) => {
  switch (action?.type) {
    case UPDATE_FILTER:
      return { ...state, filterValue: action.payload };
      case UPDATE_COLOR_SCHEME:
        return { ...state, activeColorScheme: action.payload };
    default:
      return state;
  }
};

export default reducer;
