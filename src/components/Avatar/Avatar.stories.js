import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Avatar from './Avatar';

const stories = storiesOf('Avatar', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <Avatar user={boolean('User', false)} />);
