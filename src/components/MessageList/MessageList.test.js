import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import MessageList from './MessageList';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

configure({adapter: new Adapter()});

describe('<MessageList />', () => {
	let store, wrapper;

	beforeEach(() => {
		store = mockStore({
			messages: [
				{
					message: 'teste',
				},
				{
					message: 'teste teste',
					user: true
				}
			]
		});

		wrapper = mount(<MessageList store={store} />);
	});

	it('Component is rendered', () => {
		expect(wrapper).toEqual({});
	});

	const tree = renderer
	.create(<MessageList store={store} />)
	.toJSON();
	expect(tree).toMatchSnapshot();
});
