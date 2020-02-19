import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import reducer from "../reducer";

import PageView from "../components/PageView";
import SchemeInput from "../components/SchemeInput";
import ComponentMenuItem from "../components/ComponentMenuItem";
//TODO remove for generating results
import localResults from "../../src/api/sampleIssues.json";

configure({ adapter: new Adapter() });

//TODO - generate results
const testResults = localResults;

describe("change color scheme tests", () => {
  const testColorSwitch = id => {
    const state = {
      filterValue: "race",
      results: testResults,
      activeColorScheme: "green"
    };

    const testStore = createStore(reducer, state);
    const pageViewWrapper = mount(
      <Provider store={testStore}>
        <PageView initialSelectedComponentId={id} />
      </Provider>
    );
    const startTime = performance.now();
    pageViewWrapper
      .find(SchemeInput)
      .filterWhere(it => it.prop("value") === "red")
      .find("input")
      .simulate("change");
    const endTime = performance.now();
    expect(
      pageViewWrapper
        .find(ComponentMenuItem)
        .filterWhere(it => it.prop("id") === id)
        .hasClass("red-color")
    ).toBe(true);
    

    console.log(
      `Switching color took \x1b[32m${(endTime - startTime).toPrecision(5)} ms\x1b[0m for \x1b[32m${id.toUpperCase()}\x1b[0m`
    );
  };

  it("Fast", () => {
    testColorSwitch("fast");
  });

  it("Slow", () => {
    testColorSwitch("slow");
  });

  it("Broken", () => {
    testColorSwitch("broken");
  });
});
