import React from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow, mount } from "enzyme";
import Login from "../login/Login";
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new Adapter() });

it("Renders two Input Fields", () => {
    const wrapper = shallow(<Login />);
    const valCount = wrapper.find("h2").length;
    expect(valCount).toBe(1);
});

it("Shallow renders one h5 element with text Sign in", () => {
    const wrapper = shallow(<Login />);
    const h2Text = wrapper.find("h2").text();
    expect(h2Text).toEqual("Sign In");
});

it("Shallow renders one login form container", () => {
    const wrapper = shallow(<Login />);
    const count = wrapper.find("div.login-form-container").length
    expect(count).toBe(0);
});