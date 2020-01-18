import React from "react";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  //TODO dispatch filtering on filter change after debounce e.g. 500ms
  //TODO - change filter value in state when redux gets connected
  onValueChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <input
        value={this.state.value}
        onChange={this.onValueChange}
        placeholder="Enter text to filter by"
      ></input>
    );
  }
}

export default Filter;
