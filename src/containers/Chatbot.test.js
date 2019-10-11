import React from 'react';
import {openBrowser, goto, focus, textBox, write, click, button, radioButton, closeBrowser} from 'taiko';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Chatbot from './Chatbot';

configure({adapter: new Adapter()});

describe('<Chatbot />', () => {
	it('e2e test with taiko', async() => {
		try {
			await openBrowser();
			await goto("localhost:3000");
			await focus(textBox({name: 'userField'}));
			await write("Julian");
			await click(button({class: 'Button_Button__3R1xi'}));
			await click(radioButton('30'));
			await focus(textBox({name: 'userField'}));
			await write("Brazil");
			await click(button({class: 'Button_Button__3R1xi'}));
		} catch (error) {
				console.error(error);
		} finally {
				console.log('it works!');

				await closeBrowser();
		}
	});
});
