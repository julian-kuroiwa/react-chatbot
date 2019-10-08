import React from 'react';
import { storiesOf } from '@storybook/react';

import MessageList from './MessageList';

storiesOf('MessageList', module)
  .add('default', () => <MessageList>I'm a container!</MessageList>);
