import type { ButtonProps } from './ButtonProps'
import MuiButton from '@mui/material/Button'

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'contained', ...props }) => {
  return (
    <MuiButton className={`btn ${className}`.trim()} variant={variant} {...props}>
      {children}
    </MuiButton>
  )
}

export default Button
