import MuiButton from '@mui/material/Button'
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import React from 'react'

// Interface Segregation: Define a specific interface for our Button props
export interface ButtonProps extends MuiButtonProps {
  className?: string
  children: React.ReactNode
  // ...extend with more props if needed
}

// Dependency Inversion: Accept the button component as a dependency (default to MuiButton)
interface ButtonComponentProps extends ButtonProps {
  ButtonComponent?: React.ElementType
}

const Button: React.FC<ButtonComponentProps> = ({ children, className = '', variant = 'contained', ...props }) => {
  return (
    <MuiButton className={`btn ${className}`.trim()} variant={variant} {...props}>
      {children}
    </MuiButton>
  )
}

export default Button
