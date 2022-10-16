import { AddressListItems } from '@ui/molecules'

export type DistanceAddressesProps = {
  distanceList?: {
    all?: AddressListItems[],
    nearest?: Omit<AddressListItems, 'description'>[],
    furthest?: Omit<AddressListItems, 'description'>[],
  }
}
