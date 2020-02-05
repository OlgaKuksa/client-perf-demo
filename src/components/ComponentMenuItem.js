import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ComponentMenuItem extends React.Component {
  render() {
    return (
      <span
        onClick={this.props.onClick}
        id={this.props.id}
        className={this.props.className}
      >
        {this.props.displayName} <FontAwesomeIcon icon={this.props.icon} />
      </span>
    );
  }
}

export default ComponentMenuItem;
