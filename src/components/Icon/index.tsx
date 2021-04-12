import React from 'react'
import Alert from './CustomIcons/Alert'
import Check from './CustomIcons/Check'
import CheckCircle from './CustomIcons/CheckCircle'
import ChevronRightSolid from './CustomIcons/ChevronRightSolid'
import Circle from './CustomIcons/Circle'
import Logout from './CustomIcons/Logout'
import MenuClose from './CustomIcons/MenuClose'
import MenuOpen from './CustomIcons/MenuOpen'
import Pay from './CustomIcons/Pay'

export const CustomIcons = {
  alert: Alert,
  check: Check,
  'check-circle': CheckCircle,
  'chevron-right-solid': ChevronRightSolid,
  circle: Circle,
  logout: Logout,
  'menu-close': MenuClose,
  'menu-open': MenuOpen,
  pay: Pay
}

export interface IconProps {
  iconName: keyof typeof CustomIcons
  className?: string
  color?: 'primary' | 'secondary' | 'white'
  size?: 'xs' | 'sm' | 'lg'
}

const Icon = ({
  iconName,
  className,
  color = 'primary',
  size = 'xs'
}: IconProps) => {
  const SelectedIcon = CustomIcons[iconName]
  return (
    <SelectedIcon className={`icon-${color} icon-${size} ${className || ''}`} />
  )
}

export default Icon
