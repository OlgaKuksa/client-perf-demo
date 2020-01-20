import React from "react";
import SourceSelector from "./SourceSelector";
import Filter from "./Filter";
import Slow from "./Slow";

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
        <div className="filter-box">
          <Filter />
          <SourceSelector />
        </div>
        <div className="component-line">
          <span>
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
              Slow
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
              Fast
            </span>
          </span>
        </div>
        {this.state.selectedComponentId === "slow" ? (
          <Slow />
        ) : (
          <div>PLACEHOLDER FOR FAST COMPONENT</div>
        )}
      </div>
    );
  }
}

export default PageView;
