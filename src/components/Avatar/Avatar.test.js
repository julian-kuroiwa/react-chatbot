import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Avatar from './Avatar';

configure({adapter: new Adapter()});

describe('<Avatar />', () => {
	it('Component is rendered', () => {
		const wrapper = shallow(<Avatar />);
		expect(wrapper).toBeTruthy();
	});
});
