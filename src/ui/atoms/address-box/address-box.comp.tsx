import * as S from './address-box.styles'
import { Text } from '@ui/atoms'
import { AddressBoxProps } from './address-box.types'

export const AddressBox = (props: AddressBoxProps) => {
  return (
    <S.AddressBoxContainer>
      <S.AddressBoxId>
        <Text color='white' fontWeight='bold' fontSize='md'>
          {props.id}
        </Text>
      </S.AddressBoxId>
      <S.AddressBoxContentContainer>
        <Text fontSize='md'>
          {props.address}
        </Text>
      </S.AddressBoxContentContainer>
      {props.isClearable && (
        <S.AddressBoxClear onClick={props.onClear}>X</S.AddressBoxClear>
      )}
    </S.AddressBoxContainer>
  )
}
