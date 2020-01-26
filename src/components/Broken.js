import React from "react";
import BugTable from "./BugTable";
import { connect } from "react-redux";
import { createSelector, createStructuredSelector } from "reselect";

class Broken extends React.Component {
  render() {
    return <BugTable results={this.props.filteredResults} />;
  }
}

const getFilterValue = state => state.filterValue;
const getResults = state => state.results;

const getCalculatedResults = createSelector(
  [getResults, state=>state],
  results => {
    const CountByUsers = new Map();

    for (let result of results) {
      CountByUsers.set(
        result.user.id,
        (CountByUsers.get(result.user.id) || 0) + 1
      );
    }

    const calculatedResults = results.map(it => {
      let count = 0;
      for (let result of results) {
        if (result.id === it.id) continue;
        if (
          result.body.includes("#" + it.number) ||
          result.title.includes("#" + it.number)
        )
          count++;
      }
      return {
        ...it,
        refCount: count,
        user: { ...it.user, issuesCount: CountByUsers.get(it.user.id) }
      };
    });
    return calculatedResults;
  }
);

const getFilterValues = createSelector([getFilterValue], filterValue => {
  const filterValues = filterValue
    .split(" ")
    .map(it => it.trim().toLowerCase())
    .filter(Boolean);
  return filterValues;
});

const getFilteredResults = createSelector(
  [getCalculatedResults, getFilterValues],
  (calculatedResults, filterValues) => {
    const filteredResults = filterValues.length
      ? calculatedResults.filter(it =>
          filterValues.every(
            filterValue =>
              it.title.toLowerCase().includes(filterValue) ||
              it.body.toLowerCase().includes(filterValue) ||
              it.number.toString().includes(filterValue) ||
              it.refCount.toString().includes(filterValue) ||
              (it.user.login + " (" + it.user.issuesCount + ")")
                .toLowerCase()
                .includes(filterValue) ||
              it.state.toLowerCase().includes(filterValue) ||
              new Date(it.created_at)
                .toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric"
                })
                .includes(filterValue)
          )
        )
      : calculatedResults;

    return filteredResults;
  }
);

const mapStateToProps = createStructuredSelector({
  filteredResults: getFilteredResults
});

export default connect(mapStateToProps)(Broken);
