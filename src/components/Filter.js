import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "../actiions/FilterActions";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  //TODO dispatch filtering on filter change after debounce e.g. 500ms
  //TODO - change filter value in state when redux gets connected
  onValueChange = e => {
    this.setState({ value: e.target.value }, () =>
      this.props.updateFilter(this.state.value)
    );
  };

  render() {
    return (
      <input
        className="filter-input"
        type="text"
        value={this.state.value}
        onChange={this.onValueChange}
        placeholder="Enter text to filter by"
      ></input>
    );
  }
}

const mapDispatchToProps = { updateFilter };

export default connect(null, mapDispatchToProps)(Filter);
