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
  const filteredResults = filterValues.length
    ? state.results.filter(it =>
        filterValues.every(
          filterValue =>
            it.title.toLowerCase().includes(filterValue) ||
            it.body.toLowerCase().includes(filterValue) ||
            it.number.toString().includes(filterValue) ||
            it.user.login.toLowerCase().includes(filterValue) ||
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
    : state.results;
  return { filteredResults };
};

export default connect(mapStateToProps)(Slow);
