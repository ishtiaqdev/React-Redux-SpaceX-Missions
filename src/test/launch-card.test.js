import React from 'react';
import { configure, shallow } from 'enzyme';
import LaunchCard from '../components/launch-card';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Launch Card should render correctly', () => {
    it('should render correctly in "debug" mode', () => {
      const component = shallow(<LaunchCard debug />);
    
      expect(component).toMatchSnapshot();
    });
});

//Further test can be added here.