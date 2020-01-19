import React from "react";

class SourceSelector extends React.Component {
  constructor(props) {
    super();
    this.state = { dataSource: "local" };
  }

  onDataSourceChange = e => {
    this.setState({ dataSource: e.target.value });
    //TODO - dispatch data fetch action
  };

  render() {
    return (
      <span className="source-selector">
        Issues from:
        <select
          name="data-source"
          onChange={this.onDataSourceChange}
          value={this.state.dataSource}
        >
          <option value="local">Local (react repo)</option>
          <option value="enzyme">Enzyme repo</option>
          <option value="jest">Jest repo</option>
        </select>
      </span>
    );
  }
}

export default SourceSelector;
