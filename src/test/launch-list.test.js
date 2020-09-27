import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LaunchList from '../components/launch-list';
import store from "../store";

configure({ adapter: new Adapter() });

describe('Launch List should render correctly with redux store', () => {
    it('should render correctly with redux store in "debug" mode', () => {
      const launchStore = store.getState().launchStore;
      const component = mount(<LaunchList debug launches={launchStore.launches} isSearched={launchStore.isSearched} errors={launchStore.errors} />)
    
      expect(component).toMatchSnapshot();
    });
});

//Further test can be added here.
