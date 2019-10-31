import React from "react";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

describe("the Dashboard component", () => {
  it("shows 2 toggle buttons", () => {
    const wrapper = rtl.render(<Dashboard />);
    const buttons = wrapper.getAllByText(/Gate/i);
    expect(buttons.length).toBe(2);
  });
  it("shows closed and red-led when click on Close Gate button", () => {
    const wrapper = rtl.render(<Dashboard />);
    const button = wrapper.getByText(/Close Gate/i);
    rtl.act(() => {
      rtl.fireEvent.click(button);
    });
    expect(wrapper.getByText(/Closed/i)).toHaveClass("red-led");
  });
  it("doesn't locked when click on Lock Gate and gate is Open", () => {
    const wrapper = rtl.render(<Dashboard />);
    const button = wrapper.getByText(/Lock Gate/i);
    rtl.act(() => {
      rtl.fireEvent.click(button);
    });
    expect(wrapper.getByText(/Unlocked/i)).toHaveClass("green-led");
  });
  it("shows locked  and red-led when click on Lock Gate and gate is Closed", () => {
    const wrapper = rtl.render(<Dashboard />);
    const close = wrapper.getByText(/Close Gate/i);
    const lock = wrapper.getByText(/Lock Gate/i);
    rtl.act(() => {
      rtl.fireEvent.click(close);
    });
    rtl.act(() => {
      rtl.fireEvent.click(lock);
    });
    expect(wrapper.getByText(/Locked/i)).toHaveClass("red-led");
  });
});
