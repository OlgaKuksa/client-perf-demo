import React from "react";
import BugTable from "./BugTable";
import { connect } from "react-redux";

class Slow extends React.Component {
  render() {
    return <BugTable results={this.props.filteredResults} />;
  }
}

const mapStateToProps = state => {
  const filterValues = state.filterValue
    .split(" ")
    .map(it => it.trim().toLowerCase())
    .filter(Boolean);

  const CountByUsers = new Map();
  
  for (let result of state.results) {
    CountByUsers.set(
      result.user.id,
      (CountByUsers.get(result.user.id) || 0) + 1
    );
  }

  const calculatedResults = state.results.map(it => {
    let count = 0;
    for (let result of state.results) {
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

  return { filteredResults };
};

export default connect(mapStateToProps)(Slow);
