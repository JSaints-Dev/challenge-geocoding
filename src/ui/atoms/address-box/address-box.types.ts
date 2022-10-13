export type AddressBoxProps = {
  address: string;
  id: string | number;
  onClear?: () => void;
  isClearable?: boolean;
}
