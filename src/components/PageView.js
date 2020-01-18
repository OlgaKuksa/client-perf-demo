import React from "react";
import SourceSelector from "./SourceSelector";

class PageView extends React.Component {
  constructor() {
    super();
    this.state = { selectedComponentId: "fast"};
  }

  render() {
    return (
      <div>
        <SourceSelector/>
        <div id="component-selector"></div>
        <div>filter stub</div>
        <div>grid stub</div>
      </div>
    );
  }
}

export default PageView;
