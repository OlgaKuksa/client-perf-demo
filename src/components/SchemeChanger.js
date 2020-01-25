import React from "react";
import { connect } from "react-redux";
import { updateColorScheme } from "../actions/SchemeChangerActions";

class SchemeChanger extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeScheme: props.activeColorScheme
    };
  }

  onChangeColorScheme = e => {
    this.setState({ activeScheme: e.target.value }, () =>
      this.props.updateColorScheme(this.state.activeScheme)
    );
  };

  render() {
    return (
      <span>
        <input
          type="radio"
          id="green"
          value="green"
          name="color-scheme"
          checked={this.state.activeScheme === "green"}
          onChange={this.onChangeColorScheme}
        ></input>
        <label htmlFor="green">Green</label>
        <input
          type="radio"
          id="red"
          value="red"
          name="color-scheme"
          checked={this.state.activeScheme === "red"}
          onChange={this.onChangeColorScheme}
        ></input>
        <label htmlFor="red">Red</label>
      </span>
    );
  }
}

const mapStateToProps = state => ({
  activeColorScheme: state.activeColorScheme
});

const mapDispatchToProps = {
  updateColorScheme
};

export default connect(mapStateToProps, mapDispatchToProps)(SchemeChanger);
