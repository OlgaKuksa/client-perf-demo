import React from "react";

class PageView extends React.Component {
  constructor() {
    super();
    this.state = { gridId: "fast", dataSource: "jest" };
  }

  onDataSourceChange = e => {
    this.setState(
      { dataSource: e.target.value }
    );
    //TODO - dispatch data fetch action
  };

  render() {
    return (
      <div>
        <div>
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
        </div>
        <div>components menu - fast and slow - stub</div>
        <div>filter stub</div>
        <div>grid stub</div>
      </div>
    );
  }
}

export default PageView;
