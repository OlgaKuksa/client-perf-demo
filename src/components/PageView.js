import React from "react";

class PageView extends React.Component {
  constructor() {
    super();
    this.state = { gridId: "fast", dataSource: "local" };
  }

  render() {
    return (
      <div>
        <div>data source stub</div>
        <div>components menu - fast and slow - stub</div>
        <div>filter stub</div>
        <div>grid stub</div>
      </div>
    );
  }
}

export default PageView;
