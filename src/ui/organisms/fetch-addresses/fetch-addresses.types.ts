export type FetchAddressesProps = {
  addresses?: AddressType[];
  calculatedDistances: boolean;
  getValues?: (v: string) => void;
  getDistances: () => void;
  clearAddresses: () => void;
}
