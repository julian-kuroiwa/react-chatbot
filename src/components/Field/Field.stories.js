import React from 'react';
import { storiesOf } from '@storybook/react';

import Field from './Field';

export const field = {
  id: 'teste',
  type: 'text',
  placeholder: 'TASK_INBOX',
  name: 'nameField',
};

storiesOf('Field', module)
  .add('default', () => <Field {...field} />);
