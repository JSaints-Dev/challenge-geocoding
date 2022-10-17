import { Box } from '@ui/atoms'
import { DistanceAddresses, FetchAddresses } from '@ui/organisms'
import * as S from './geolocation.styles'
import * as Containers from './geolocation.container'

export const GeolocationTemplate = () => {
  return (
    <Box w='100%' minH='100vh'>
      <Containers.GeolocationContainer>
        {({ getFormValueAndSaveAddress, addresses }) => (
          <S.FetchAddressContainer>
            <FetchAddresses addresses={addresses} getValues={getFormValueAndSaveAddress} />
            <DistanceAddresses />
          </S.FetchAddressContainer>
        )}
      </Containers.GeolocationContainer>
    </Box>
  )
}
