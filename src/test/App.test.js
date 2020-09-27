import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });
  
it("renders App header correctly", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Welcome to SpaceX Missions</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

//Further test can be added here.