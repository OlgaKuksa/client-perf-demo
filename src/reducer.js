import localResults from "./api/sampleIssues.json";

const initialState = {
    filterValue:"",
    results:localResults 
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
