import { action } from '@storybook/addon-actions';

import React from 'react';
import { Button } from '@storybook/react/demo';
import Demo from "../../../src/demo";

export const Text4 = () => <Button onClick={action('clicked')}>Hello Button asdf</Button>;
Text4.story = {
  name: 'dfdf'
}
export const k = () => <Demo/>;
export default {
  title: 'Saaa',
  component: Text4,
};
