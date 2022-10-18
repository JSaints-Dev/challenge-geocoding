import { AddressList, InputAddress } from '@ui/molecules'
import { Box, Divider } from '@ui/atoms'
import { FetchAddressesProps } from './fetch-addresses.types'
import { theme } from '@resources/styles/theme'
import { useMediaQuery } from '@resources/hooks'

export const FetchAddresses = (props: FetchAddressesProps) => {
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.md})`)
  return (
    <Box w='100%' gap='md' p='1rem 0'>
      <InputAddress
        calculatedDistances={props.calculatedDistances}
        clearAddresses={props.clearAddresses}
        getDistances={props.getDistances}
        getValues={props.getValues}
      />
      <Divider bg='white' />
      <AddressList listItems={props.addresses} dir={isDesktop ? 'row' : 'column'} />
    </Box>
  )
}
