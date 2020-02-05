import React from "react";
import Filter from "./Filter";
import Slow from "./Slow";
import Fast from "./Fast";
import Broken from "./Broken";
import SchemeChanger from "./SchemeChanger";
import ComponentMenuItem from "./ComponentMenuItem";
import {
  faPlaneDeparture,
  faCarCrash,
  faShoePrints
} from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

class PageView extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedComponentId: props.initialSelectedComponentId || "fast"
    };
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

  getClassName = id => {
    const colorClassName =
      this.state.selectedComponentId === id
        ? "active " + (this.props.activeColorScheme + "-color")
        : "inactive ";
    return "component-box " + colorClassName;
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
            <ComponentMenuItem
              onClick={this.makeComponentActive("slow")}
              id="slow"
              icon={faShoePrints}
              displayName="Slow"
              className={this.getClassName("slow")}
            />
            <ComponentMenuItem
              onClick={this.makeComponentActive("fast")}
              id="fast"
              icon={faPlaneDeparture}
              displayName="Fast"
              className={this.getClassName("fast")}
            />
            <ComponentMenuItem
              onClick={this.makeComponentActive("broken")}
              id="broken"
              icon={faCarCrash}
              displayName="Broken"
              className={this.getClassName("broken")}
            />
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
