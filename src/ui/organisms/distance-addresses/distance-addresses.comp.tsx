import { useMediaQuery } from '@resources/hooks'
import { theme } from '@resources/styles/theme'
import { Box, Divider, Text } from '@ui/atoms'
import { AddressList } from '@ui/molecules'
import { DistanceAddressesProps } from './distance-addresses.types'

export const DistanceAddresses = (props: DistanceAddressesProps) => {
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.md})`)

  return (
    <Box p='1rem 0' gap='xl' w='100%'>
      {!!props.distanceList?.all && <AddressList listItems={props.distanceList.all} dir={isDesktop ? 'row' : 'column'} />}

      {(!!props.distanceList?.furthest || !!props.distanceList?.nearest) && <Divider />}
      <Box gap='xl' w='100%' alignItems='center' justify='center' dir={isDesktop ? 'row' : 'column'}>
        {!!props.distanceList?.nearest && (
          <Box alignItems='center' gap='sm' dir='column'>
            <Text fontSize='md' fontWeight='bold'>Mais próximos</Text>
            <AddressList listItems={props.distanceList.nearest} />
          </Box>)}

        {!!props.distanceList?.furthest && (
          <Box alignItems='center' gap='sm'>
            <Text fontSize='md' fontWeight='bold'>Mais distantes</Text>
            <AddressList listItems={props.distanceList.furthest} />
          </Box>)}
      </Box>
    </Box>
  )
}
