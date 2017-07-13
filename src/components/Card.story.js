import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import { storiesOf } from '@storybook/react'

import { Card } from './Card'

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('basic usage', () => <Card card={number('Value', 0)} />)
