import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from './index'
import Icon from '../Icon/index'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colorType: { control: 'select' },
    size: { control: 'select' }
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Ingresar',
  onClick: () => {}
}

export const Secondary = Template.bind({})
Secondary.args = {
  text: 'Ingresar',
  colorType: 'secondary',
  onClick: () => {}
}

export const Small = Template.bind({})
Small.args = {
  text: 'Ingresar',
  onClick: () => {},
  size: 'sm'
}

export const Loading = Template.bind({})
Loading.args = {
  text: 'Ingresar',
  onClick: () => {},
  loading: true,
  disabled: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  text: 'Ingresar',
  onClick: () => {},
  disabled: true
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  text: 'Ingresar',
  onClick: () => {},
  disabled: true,
  icon: <Icon iconName='circle' />
}
