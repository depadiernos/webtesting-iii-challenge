import React from "react";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

afterEach(rtl.cleanup);

describe("the Display component", () => {
  it("shows open and green-led on render", () => {
    const wrapper = rtl.render(<Display />);
    const gate = wrapper.getByText(/Open/i);
    expect(gate).toHaveClass("green-led");
  });
  it("shows close and red-led when closed is true", () => {
    const wrapper = rtl.render(<Display closed={true}/>);
    const gate = wrapper.getByText(/Closed/i);
    expect(gate).toHaveClass("red-led");
  });
  it("shows unlocked and green-led on render", () => {
    const wrapper = rtl.render(<Display />);
    const gate = wrapper.getByText(/Unlocked/i);
    expect(gate).toHaveClass("green-led");
  });
  it("shows close and red-led when locked is true", () => {
    const wrapper = rtl.render(<Display locked={true}/>);
    const gate = wrapper.getByText(/Locked/i);
    expect(gate).toHaveClass("red-led");
  });
});
