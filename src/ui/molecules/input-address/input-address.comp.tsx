import { Button, Input } from '@ui/atoms'
import * as S from './input-address.styles'

export const InputAddress = () => {
  return (
    <S.InputAddressWrapper>
      <Input />
      <S.ButtonsWrapper>
        <Button bg='primaryDark'>Cadastrar</Button>
        <Button bg='primaryDark'>Calcular distância</Button>
      </S.ButtonsWrapper>
    </S.InputAddressWrapper>
  )
}
