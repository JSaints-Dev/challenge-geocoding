import { AddressBox, Text } from '@ui/atoms'
import * as S from './address-list.styles'
import { AddressListProps } from './address-list.types'

/**
 * AddressList
 * @param {boolean} props.itemIsClearable
 * defines the AddressBox component will have the option to be deleted
 *
 * @param {AddressListItem[]} props.listItems
 * array of objects containing the address, address id and description if it has description.
 *
 * @param {string} props.dir
 * list direction which can be column or row
 * @example
 * import { AddressList } from '@ui/molecules'
 * const list = [
 *  {
 *    address: 'Rua Lauro Muller 116, Botafogo, Rio de janeiro, RJ, 22290160',
 *    id: 1,
 *    description: 'Distante 2Km de endereço X e 4Km de endereço Y',
 *  }
 * ]
 * return (
 *  <AddressList listItems={list} dir='column' />
 * )
 * */

export const AddressList = (props: AddressListProps) => {
  return (
    <S.AddressListWrapper dir={props.dir}>
      {props.listItems?.map((item) => (
        <S.AddressWrapper key={item.id}>
          <AddressBox
            address={item.address}
            id={item.id}
            isClearable={props.itemIsClearable}
          />

          {!!item.description && props.showDescription && (
            <S.DescriptionWrapper>
              <Text color='white' fontSize='sm'>
                {item.description}
              </Text>
            </S.DescriptionWrapper>)}

        </S.AddressWrapper>
      ))}
    </S.AddressListWrapper>
  )
}
