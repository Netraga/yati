import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from '../buttons/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
