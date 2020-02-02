import React from "react";
import { connect } from "react-redux";
import { updateColorScheme } from "../actions/SchemeChangerActions";
import SchemeInput from "./SchemeInput";

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
        <SchemeInput
          id="green"
          checked={this.state.activeScheme === "green"}
          value="green"
          displayName="Green"
          onChange={this.onChangeColorScheme}
        />
        <SchemeInput
          id="red"
          checked={this.state.activeScheme === "red"}
          value="red"
          displayName="Red"
          onChange={this.onChangeColorScheme}
        />
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
