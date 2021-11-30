import React from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow, mount } from "enzyme";
import Register from "../signUP/signUp";

Enzyme.configure({ adapter: new Adapter() });

it("Renders two Input Fields", () => {
    const wrapper = shallow(<Register />);
    const valCount = wrapper.find("h2").length;
    expect(valCount).toBe(1);
});

it("Shallow renders one h5 element with text", () => {
    const wrapper = shallow(<Register />);
    const h2Text = wrapper.find("h2").text();
    expect(h2Text).toEqual("Create your Fundo Account");
});

it("Shallow renders one register form container", () => {
    const wrapper = shallow(<Register />);
    const count = wrapper.find("formForSignUp").length
    expect(count).toBe(0);
});