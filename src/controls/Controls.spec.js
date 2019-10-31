import React from "react";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";

import Controls from "./Controls";

afterEach(rtl.cleanup);

describe("the Controls component", () => {
  it("shows Lock Gate button", () => {
    const wrapper = rtl.render(<Controls />);
    const button = wrapper.getByText(/Lock Gate/i);
    expect(button).toExist;
  });
  it("shows Unlock Gate button", () => {
    const wrapper = rtl.render(<Controls locked={true}/>);
    const button = wrapper.getByText(/Unlock Gate/i);
    expect(button).toExist;
  });
  it("shows Close Gate button", () => {
    const wrapper = rtl.render(<Controls />);
    const button = wrapper.getByText(/Close Gate/i);
    expect(button).toExist;
  });
  it("shows Close Gate button", () => {
    const wrapper = rtl.render(<Controls closed={true}/>);
    const button = wrapper.getByText(/Open Gate/i);
    expect(button).toExist;
  });
  it("trigger toggleLocked function on click", () => {
    const toggleLocked = jest.fn();
    const wrapper = rtl.render(<Controls toggleLocked={toggleLocked} />);
    const button = wrapper.getByText(/Lock Gate/i);
    rtl.act(() => {
      rtl.fireEvent.click(button);
    });
    expect(toggleLocked).toHaveBeenCalled;
  });
  it("trigger toggleClosed function on click", () => {
    const toggleClosed = jest.fn();
    const wrapper = rtl.render(<Controls toggleClosed={toggleClosed} />);
    const button = wrapper.getByText(/Close Gate/i);
    rtl.act(() => {
      rtl.fireEvent.click(button);
    });
    expect(toggleClosed).toHaveBeenCalled;
  });
});
