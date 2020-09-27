import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SearchInput } from '../pages/search-input';

configure({ adapter: new Adapter() });

describe('Launch List Page should render correctly with redux store', () => {
    it('should render correctly with redux store in "debug" mode', () => {
      const component = mount(<SearchInput debug />)
    
      expect(component).toMatchSnapshot();
    });
});

//Further test can be added here.
