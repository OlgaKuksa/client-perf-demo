import React from "react";
import SourceSelector from "./SourceSelector";
import Filter from "./Filter";

import "./PageView.css";

class PageView extends React.Component {
  constructor() {
    super();
    this.state = { selectedComponentId: "fast" };
  }

  makeComponentActive = e => {
    this.setState({ selectedComponentId: e.target.id });
  };

  render() {
    return (
      <div>
        <SourceSelector />
        <div>
          <span
            onClick={this.makeComponentActive}
            id="slow"
            className={
              "component-box " +
              (this.state.selectedComponentId === "slow"
                ? "active"
                : "inactive")
            }
          >
            Slow component
          </span>
          <span
            onClick={this.makeComponentActive}
            id="fast"
            className={
              "component-box " +
              (this.state.selectedComponentId === "fast"
                ? "active"
                : "inactive")
            }
          >
            Fast Component
          </span>
        </div>
        <Filter />
        <div>grid stub</div>
      </div>
    );
  }
}

export default PageView;
