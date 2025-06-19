import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'

export interface ButtonProps extends MuiButtonProps {
  className?: string
  children: React.ReactNode
  variant?: 'text' | 'outlined' | 'contained'
}
