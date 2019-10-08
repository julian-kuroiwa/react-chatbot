import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('default', () => <Button type="button">Click here to test!</Button>);
