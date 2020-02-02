import React from "react";

class SchemeInput extends React.Component {
  render() {
    return (
      <span>
        <input
          type="radio"
          id={this.props.id}
          value={this.props.value}
          name="color-scheme"
          checked={this.props.checked}
          onChange={this.props.onChange}
        ></input>
        <label htmlFor={this.props.id}>{this.props.displayName}</label>
      </span>
    );
  }
}

export default SchemeInput;
