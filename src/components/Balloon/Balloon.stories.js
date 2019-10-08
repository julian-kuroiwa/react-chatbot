import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Balloon from './Balloon';

const stories = storiesOf('Balloon', module);
stories.addDecorator(withKnobs);

stories.add('default', () => <Balloon message={text('Message', 'Hi! I\'m test message!')} />);



