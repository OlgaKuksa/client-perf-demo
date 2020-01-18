import React from "react";
import SourceSelector from "./SourceSelector";
import Filter from "./Filter";

class PageView extends React.Component {
  constructor() {
    super();
    this.state = { selectedComponentId: "fast" };
  }

  render() {
    return (
      <div>
        <SourceSelector />
        <div id="component-selector"></div>
        <Filter />
        <div>grid stub</div>
      </div>
    );
  }
}

export default PageView;
