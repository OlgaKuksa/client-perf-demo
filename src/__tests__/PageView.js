import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import reducer from "../reducer";

import PageView from "../components/PageView";
import SchemeInput from "../components/SchemeInput";
import ComponentMenuItem from "../components/ComponentMenuItem";
import BugTable from "../components/BugTable";

configure({ adapter: new Adapter() });

const generateTestResults = (count = 2000) => {
  const results = [];
  const addedBody =
    "whatever text for some length so that filter could search it";
  for (let i = 0; i < count; i++) {
    const result = {
      number: i,
      id: `id${i}`,
      title: `title${i % 300 ? i : "race"}`,
      user: {
        login: `user${i % 10}`,
        id: `userId${i % 10}`
      },
      state: i > count / 2 ? "open" : "closed",
      body: `${addedBody}userId${i % 200 ? "" : "race"}`,
      created_at: "2020-02-19T18:39:51Z"
    };
    results.push(result);
  }
  return results;
};

const testResults = generateTestResults();

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
    expect(pageViewWrapper.find(BugTable).prop("results").length).toBe(13);

    console.log(
      `Switching color took \x1b[32m${(endTime - startTime).toPrecision(
        5
      )} ms\x1b[0m for \x1b[32m${id.toUpperCase()}\x1b[0m`
    );
    pageViewWrapper.unmount();
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
