import { ButtonProps } from './button.types'
import * as S from './button.styles'

export const Button = (props: ButtonProps) => {
  return (
    <S.ButtonElement {...props}>
      {props.children}
    </S.ButtonElement>
  )
}
