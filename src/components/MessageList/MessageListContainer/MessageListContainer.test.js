import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MessageListContainer from './MessageListContainer';
import Balloon from '../../Balloon/Balloon';

configure({adapter: new Adapter()});

describe('<Avatar />', () => {
	it('Component is rendered', () => {
		const wrapper = shallow(<MessageListContainer text="Test" />);
		expect(wrapper.find(Balloon));
	});
});
