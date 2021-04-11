import React from 'react'
import { Button as BaseButton } from 'reactstrap'

export type ButtonProps = {
  colorType?: 'primary' | 'secondary'
  text: string
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactElement
  size?: 'sm' | 'lg'
}

/**
 * Componente utilizado para renderizar el botón primary o secondary
 * definido en la guía de estilos (colorType = "primary" | "secondary")
 */
const Button = ({
  colorType = 'primary',
  text,
  type = 'button',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  icon,
  size = 'lg'
}: ButtonProps) => {
  return (
    <BaseButton
      block
      color={disabled || loading ? 'dark' : 'primary'}
      type={type}
      className={`custom-button ${className}`}
      disabled={disabled}
      onClick={onClick}
      outline={colorType === 'secondary'}
      size={size}
    >
      <div className='d-flex align-items-center justify-content-center'>
        {icon && <div className='pr-2 icon-btn'>{icon}</div>}
        <span>{loading ? 'Loading...' : text.toUpperCase()}</span>
      </div>
    </BaseButton>
  )
}

export default Button
