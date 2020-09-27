import React from 'react';
import { configure, shallow } from 'enzyme';
import HistoryCard from '../components/history-card';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('History Card should render correctly', () => {
    it('should render correctly in "debug" mode', () => {
      const component = shallow(<HistoryCard debug />);
    
      expect(component).toMatchSnapshot();
    });
});

//Further test can be added here.