import React from 'react';
import {Provider} from 'react-redux'
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LaunchListPage from '../pages/launch-list-page';
import store from "../store";

configure({ adapter: new Adapter() });

describe('Launch List Page should render correctly with redux store', () => {
    it('should render correctly with redux store in "debug" mode', () => {
      const component = mount(<Provider store={store}><LaunchListPage debug /></Provider>)
    
      expect(component).toMatchSnapshot();
    });
});

//Further test can be added here.