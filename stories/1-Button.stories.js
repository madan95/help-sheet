import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import RadioStyled from "../src/demo/button/radio-styled";
export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button 3</Button>;
export const Text2 = () => <Button onClick={action('clicked')}>Hello Button f</Button>;
export const Ok = () => <RadioStyled/>;
export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

Text.story = {
  name: 'texter',
}
Emoji.story = {
  name: 'with emoji',
};
