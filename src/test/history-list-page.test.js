import React from 'react';
import {Provider} from 'react-redux'
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HistoryListPage from '../pages/history-list-page';
import store from "../store";

configure({ adapter: new Adapter() });

describe('History List Page should render correctly with redux store', () => {
    it('should render correctly with redux store in "debug" mode', () => {
      const component = mount(<Provider store={store}><HistoryListPage debug /></Provider>)
      
      expect(component).toMatchSnapshot();
    });
});

//Further test can be added here.