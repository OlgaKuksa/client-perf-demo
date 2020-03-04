import React from "react";

class SchemeInput extends React.Component {
  render() {
    return (
      <span>
        <input className="input-radio"
          type="radio"
          value={this.props.value}
          id={this.props.value}
          name="color-scheme"
          checked={this.props.checked}
          onChange={this.props.onChange}
        ></input>
        <label className="scheme-input" htmlFor={this.props.value}>{this.props.displayName}</label>
      </span>
    );
  }
}

export default SchemeInput;
