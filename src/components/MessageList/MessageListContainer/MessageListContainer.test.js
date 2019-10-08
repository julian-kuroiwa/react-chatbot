import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import MessageListContainer from './MessageListContainer';
import Balloon from '../../Balloon/Balloon';

configure({adapter: new Adapter()});

describe('<MessageListContainer />', () => {
	it('Component is rendered', () => {
		const wrapper = shallow(<MessageListContainer message="Test" />);
		expect(wrapper.find(Balloon));
	});

	const tree = renderer
	.create(<MessageListContainer message="This is a test" />)
	.toJSON();
	expect(tree).toMatchSnapshot();
});
