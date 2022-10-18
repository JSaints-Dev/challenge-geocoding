export type FetchAddressesProps = {
  addresses?: AddressType[];
  getValues?: (v: string) => void;
  getDistances: () => void;
}
