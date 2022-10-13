import { Button, Input } from '@ui/atoms'
import * as S from './input-address.styles'

export const InputAddress = () => {
  return (
    <S.InputAddressWrapper>
      <Input />
      <S.ButtonsWrapper>
        <Button>Cadastrar</Button>
        <Button>Calcular distância</Button>
      </S.ButtonsWrapper>
    </S.InputAddressWrapper>
  )
}
