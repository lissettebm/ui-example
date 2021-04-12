import React from 'react'
import { Button as BaseButton } from 'reactstrap'
import Icon from '../Icon'

export type ButtonProps = {
  /**
   * Colores obtenidos desde las variables (primary and secondary) del tema
   */
  colorType?: 'primary' | 'secondary'
  /**
   * Texto que tendrá el botón
   */
  text: string
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
  loading?: boolean
  /**
   * El icono se agrega al lado izquierdo del texto del botón
   */
  icon?: React.ReactElement
  /**
   * Tamaño del botón (alto)
   */
  size?: 'sm' | 'lg'
  fullwidth?: boolean
}

/**
 * Componente utilizado para renderizar el botón primary o secondary
 * definido en la guía de estilos.<br/>
 * El ancho del botón se adapta al contenedor en el cual se encuentra
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
  size = 'lg',
  fullwidth = true
}: ButtonProps) => {
  return (
    <BaseButton
      color={disabled || loading ? 'dark' : 'primary'}
      type={type}
      className={`custom-button ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      outline={colorType === 'secondary'}
      size={size}
      style={{ width: fullwidth ? '100%' : '' }}
    >
      {loading ? (
        <Icon className='spin fs-2' iconName='circle' color='white' />
      ) : (
        <div className='d-flex align-items-center justify-content-center'>
          {icon && <div className='pr-2 icon-btn'>{icon}</div>}
          <span>{text.toUpperCase()}</span>
        </div>
      )}
    </BaseButton>
  )
}

export default Button
