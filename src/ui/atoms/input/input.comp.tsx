import * as S from './input.styles'
import { InputProps } from './input.types'

export const Input = (props: InputProps) => {
  return (
    <S.InputWrapper>
      <S.InputElement {...props} />
    </S.InputWrapper>
  )
}
