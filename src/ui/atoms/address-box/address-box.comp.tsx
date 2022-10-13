import * as S from './address-box.styles'
import { AddressBoxProps } from './address-box.types'

export const AddressBox = (props: AddressBoxProps) => {
  return (
    <S.AddressBoxContainer>
      <S.AddressBoxId>{props.id}</S.AddressBoxId>
      <S.AddressBoxContentContainer>
        {props.address}
      </S.AddressBoxContentContainer>
      {props.isClearable && (
        <S.AddressBoxClear onClick={props.onClear}>X</S.AddressBoxClear>
      )}
    </S.AddressBoxContainer>
  )
}
