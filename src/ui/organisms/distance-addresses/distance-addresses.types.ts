export type DistanceAddressesProps = {
  distanceList?: {
    all?: AddressType[],
    nearest?: Omit<AddressType, 'description' | 'latitude' | 'longitude'>[],
    furthest?: Omit<AddressType, 'description' | 'latitude' | 'longitude'>[],
  }
}
