import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HistoryList from '../components/history-list';
import store from "../store";

configure({ adapter: new Adapter() });

describe('History List should render correctly with redux store', () => {
    it('should render correctly with redux store in "debug" mode', () => {
      const historyStore = store.getState().historyStore;
      const component = mount(<HistoryList debug histories={historyStore.histories} errors={historyStore.errors} />)
    
      expect(component).toMatchSnapshot();
    });
});

//Further test can be added here.