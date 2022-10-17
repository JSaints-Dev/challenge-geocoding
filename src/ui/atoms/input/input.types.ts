export type InputProps = {
  error?: string
  inputRef?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined
} & React.InputHTMLAttributes<HTMLInputElement>
