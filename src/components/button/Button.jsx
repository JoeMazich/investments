import muiButton from '@mui/material/Button'

function Button({ children, className, variant, ...props }) {
  return (
    <muiButton className={`btn ${className}`} variant={variant} {...props}>
      {children}
    </muiButton>
  )
}

export default Button
