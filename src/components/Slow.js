import React from "react";
import BugTable from "./BugTable";
import { connect } from "react-redux";

class Slow extends React.Component {
  render() {
    return <BugTable results={this.props.filteredResults} />;
  }
}

const mapStateToProps = state => {
  const filterValue = state.filterValue.trim();
  const filteredResults = filterValue
    ? state.results.filter(
        it => it.title.includes(filterValue) || it.body.includes(filterValue)
      )
    : state.results;
  return { filteredResults };
};

export default connect(mapStateToProps)(Slow);
