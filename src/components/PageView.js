import React from "react";
import Filter from "./Filter";
import Slow from "./Slow";
import Fast from "./Fast";
import Broken from "./Broken";
import SchemeChanger from "./SchemeChanger";

import { connect } from "react-redux";

class PageView extends React.Component {
  constructor() {
    super();
    this.state = { selectedComponentId: "fast" };
  }

  makeComponentActive = e => {
    this.setState({ selectedComponentId: e.target.id });
  };

  renderSelectedComponent = () => {
    switch (this.state.selectedComponentId) {
      case "slow":
        return <Slow />;
      case "fast":
        return <Fast />;
      case "broken":
        return <Broken />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <div className="filter-box">
          <Filter />
          <SchemeChanger />
        </div>
        <div className="component-line">
          <span>
            <span
              onClick={this.makeComponentActive}
              id="slow"
              className={
                "component-box " +
                (this.state.selectedComponentId === "slow"
                  ? "active " + (this.props.activeColorScheme + "-color")
                  : "inactive ")
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
                  ? "active " + (this.props.activeColorScheme + "-color")
                  : "inactive ")
              }
            >
              Fast
            </span>
            <span
              onClick={this.makeComponentActive}
              id="broken"
              className={
                "component-box " +
                (this.state.selectedComponentId === "broken"
                  ? "active " + (this.props.activeColorScheme + "-color")
                  : "inactive ")
              }
            >
              Broken
            </span>
          </span>
        </div>
        {this.renderSelectedComponent()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeColorScheme: state.activeColorScheme
});

export default connect(mapStateToProps, null)(PageView);
