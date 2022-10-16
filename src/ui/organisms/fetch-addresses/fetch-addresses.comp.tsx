import { AddressList, InputAddress } from '@ui/molecules'
import { Box, Divider } from '@ui/atoms'
import { FetchAddressesProps } from './fetch-addresses.types'

export const FetchAddresses = (props: FetchAddressesProps) => {
  return (
    <Box w='100%' gap='lg' p='1rem 0'>
      <InputAddress />
      <Divider bg='white' />
      <AddressList listItems={props.addresses} />
    </Box>
  )
}
