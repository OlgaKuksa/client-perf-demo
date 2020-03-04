import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "../actions/FilterActions";
import debounce from "lodash.debounce";

class Filter extends React.Component {
  constructor(props) {
    super();
    this.state = { value: props.filterValue || "" };
  }

  updateFilterInAppState = debounce(() => {
    this.props.updateFilter(this.state.value);
  }, 250);

  onValueChange = e => {
    this.setState({ value: e.target.value }, this.updateFilterInAppState);
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

const mapStateToProps = state => ({
  filterValue: state.filterValue
});
const mapDispatchToProps = { updateFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
