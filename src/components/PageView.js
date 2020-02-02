import React from "react";
import Filter from "./Filter";
import Slow from "./Slow";
import Fast from "./Fast";
import Broken from "./Broken";
import SchemeChanger from "./SchemeChanger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture, faCarCrash, faShoePrints } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

class PageView extends React.Component {
  constructor() {
    super();
    this.state = { selectedComponentId: "fast" };
  }

  makeComponentActive = id => () => {
    this.setState({ selectedComponentId: id });
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
              onClick={this.makeComponentActive("slow")}
              id="slow"
              className={
                "component-box " +
                (this.state.selectedComponentId === "slow"
                  ? "active " + (this.props.activeColorScheme + "-color")
                  : "inactive ")
              }
            >
              Slow <FontAwesomeIcon icon={faShoePrints} />
            </span>
            <span
              onClick={this.makeComponentActive("fast")}
              id="fast"
              className={
                "component-box " +
                (this.state.selectedComponentId === "fast"
                  ? "active " + (this.props.activeColorScheme + "-color")
                  : "inactive ")
              }
            >
              Fast <FontAwesomeIcon icon={faPlaneDeparture} />
            </span>
            <span
              onClick={this.makeComponentActive("broken")}
              id="broken"
              className={
                "component-box " +
                (this.state.selectedComponentId === "broken"
                  ? "active " + (this.props.activeColorScheme + "-color")
                  : "inactive ")
              }
            >
              Broken <FontAwesomeIcon icon={faCarCrash} />
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
