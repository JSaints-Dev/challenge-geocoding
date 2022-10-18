import { useMediaQuery } from '@resources/hooks'
import { theme } from '@resources/styles/theme'
import { Box, Divider, Text } from '@ui/atoms'
import { AddressList } from '@ui/molecules'
import { DistanceAddressesProps } from './distance-addresses.types'

export const DistanceAddresses = (props: DistanceAddressesProps) => {
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.md})`)
  const nearest = props.distanceList?.nearest?.map(id => props.distanceList?.all?.find(address => address.id === id)) as AddressType[]
  const furthest = props.distanceList?.furthest?.map(id => props.distanceList?.all?.find(address => address.id === id)) as AddressType[]

  return (
    <Box p='1rem 0' gap='xl' w='100%'>
      {!!props.distanceList?.all && <AddressList listItems={props.distanceList.all} dir={isDesktop ? 'row' : 'column'} showDescription />}

      {(!!props.distanceList?.furthest || !!props.distanceList?.nearest) && <Divider bg='white' />}
      <Box
        alignItems='center'
        dir={isDesktop ? 'row' : 'column'}
        gap='xl'
        justify='center'
        margin='auto'
        maxW={theme.breakpoints.md}
        w='100%'
      >
        {!!nearest && (
          <Box alignItems='center' gap='sm' dir='column'>
            <Text fontSize='md' fontWeight='bold'>Mais próximos</Text>
            <AddressList listItems={nearest} />
          </Box>)}

        {!!furthest && (
          <Box alignItems='center' gap='sm'>
            <Text fontSize='md' fontWeight='bold'>Mais distantes</Text>
            <AddressList listItems={furthest} />
          </Box>)}
      </Box>
    </Box>
  )
}
