import { Box } from '@ui/atoms'
import { DistanceAddresses, FetchAddresses } from '@ui/organisms'
import * as S from './geolocation.styles'

export const GeolocationTemplate = () => {
  return (
    <Box w='100%' minH='100vh'>
      <S.FetchAddressContainer>
        <FetchAddresses />
        <DistanceAddresses />
      </S.FetchAddressContainer>
    </Box>
  )
}
